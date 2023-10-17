import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/entities/IClient.entity";
import { ICreateClientUseCase } from "../../ports/in/client/ICreateClientUseCases";
import { IClientRepository } from "../../ports/out/client/IClient.repository";
import { IFindClientByCpfUseCase } from "../../ports/in/client/IFindClientByCpfUseCase";
import { CustomError } from "../../../domain/exceptions/Exceptions";

@injectable()
class CreateClientUseCase implements ICreateClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository,
    @inject("FindClientByCpfUseCase") private findClientByCpf: IFindClientByCpfUseCase,
  ) {}

  async execute(client: IClient): Promise<void> {
    const clientFound = await this.findClientByCpf.execute(client.cpf).then(resp => resp)

    if(clientFound) {
      throw new CustomError("Client already exists", 409)
    }

    this.clientRepository.save(client);
  }
}

export { CreateClientUseCase };

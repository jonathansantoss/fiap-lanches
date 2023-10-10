import { injectable, inject } from "tsyringe";
import { IClientRepository } from "../../ports/out/client/IClient.repository";
import { IFindClientByCpfUseCase } from "../../ports/in/client/IFindClientByCpfUseCase";
import { IClient } from "../../../domain/entities/IClient.entity";

@injectable()
class FindClientByCpfUseCase implements IFindClientByCpfUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(cpf: string): Promise<IClient> {
    return await this.clientRepository.findByCpf(cpf);
  }
}

export { FindClientByCpfUseCase };

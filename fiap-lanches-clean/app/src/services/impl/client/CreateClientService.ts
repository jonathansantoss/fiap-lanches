import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { ICreateClientService } from "../../interfaces/client/ICreateClientService";
import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";
import { CustomError } from "../../exceptions/Exceptions";

@injectable()
class CreateClientService implements ICreateClientService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository,
    @inject("FindClientByCpfService") private findClientByCpf: IFindClientByCpfService,
  ) {}

  async execute(client: IClient): Promise<void> {
    const clientFound = await this.findClientByCpf.execute(client.cpf).then(resp => resp)

    if(clientFound) {
      throw new CustomError(`Client ${client.cpf} already exists`, 409)
    }
    this.clientRepository.save(client);
  }
}

export { CreateClientService };

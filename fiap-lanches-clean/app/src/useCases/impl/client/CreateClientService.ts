import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { ICreateClientService } from "../../interfaces/client/ICreateClientService";
import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";
import { CustomError } from "../../../domain/exceptions/Exceptions";

class CreateClientService implements ICreateClientService {

  async execute(client: IClient, repository: IClientRepository, findClientByCpfService: IFindClientByCpfService): Promise<void> {
    const clientFound = await findClientByCpfService.execute(client.cpf, repository).then(resp => resp)

    if(clientFound) {
      throw new CustomError(`Client ${client.cpf} already exists`, 409)
    }

    repository.save(client);
  }
}

export { CreateClientService };

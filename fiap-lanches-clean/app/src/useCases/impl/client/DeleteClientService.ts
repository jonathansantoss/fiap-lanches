import { IDeleteClientService } from "../../interfaces/client/IDeleteClientService";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { ClientRepository } from "../../../repositories/impl/ClientRepository";

class DeleteClientService implements IDeleteClientService {

  async execute(cpf: string, clientRepository: IClientRepository): Promise<void> {
    await clientRepository.delete(cpf);
  }
}

export { DeleteClientService };

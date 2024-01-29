import { cli } from "winston/lib/winston/config";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IListClientService } from "../../interfaces/client/IListClientService";

class ListClientService implements IListClientService {

  async execute(clientRepository: IClientRepository): Promise<IClient[]> {
    return await clientRepository.getAllClients();
  }
}

export { ListClientService };

import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IUpdateClientService } from "../../interfaces/client/IUpdateClientService";

class UpdateClientService implements IUpdateClientService {

  async execute(client: IClient, clientRepository: IClientRepository): Promise<void> {
    await clientRepository.update(client);
  }
}

export { UpdateClientService };

import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IListClientService } from "../../interfaces/client/IListClientService";

@injectable()
class ListClientService implements IListClientService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(): Promise<IClient[]> {
    return await this.clientRepository.getAllClients();
  }
}

export { ListClientService };

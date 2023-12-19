import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IListClientsService } from "../../interfaces/client/IListClientsService";

@injectable()
class ListClientsService implements IListClientsService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(): Promise<IClient[]> {
    return await this.clientRepository.getAllClients();
  }
}

export { ListClientsService };

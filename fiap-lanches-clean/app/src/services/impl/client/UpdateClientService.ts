import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IUpdateClientService } from "../../interfaces/client/IUpdateClientService";

@injectable()
class UpdateClientService implements IUpdateClientService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(client: IClient): Promise<void> {
    await this.clientRepository.update(client);
  }
}

export { UpdateClientService };

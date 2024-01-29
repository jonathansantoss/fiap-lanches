import { injectable, inject } from "tsyringe";
import { IClientRepository } from "../../ports/out/client/IClient.repository";
import { IClient } from "../../../domain/entities/IClient.entity";
import { IListClientUseCase } from "../../ports/in/client/IListClientsUseCase";

@injectable()
class ListClientUseCase implements IListClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(): Promise<IClient[]> {
    return await this.clientRepository.getAllClients();
  }
}

export { ListClientUseCase };

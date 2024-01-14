import { injectable, inject } from "tsyringe";
import { IClientRepository } from "../../ports/out/client/IClient.repository";
import { IUpdateClientUseCase } from "../../ports/in/client/IUpdateClientUseCase";
import { IClient } from "../../../domain/entities/IClient.entity";

@injectable()
class UpdateClientUseCase implements IUpdateClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(client: IClient): Promise<void> {
    await this.clientRepository.update(client);
  }
}

export { UpdateClientUseCase };

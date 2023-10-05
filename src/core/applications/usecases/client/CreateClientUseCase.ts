import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/entities/IClient.entity";
import { ICreateClientUseCase } from "../../ports/in/client/ICreateClientUseCases";
import { IClientRepository } from "../../ports/out/client/IClient.repository";

@injectable()
class CreateClientUseCase implements ICreateClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  execute(client: IClient): void {
    this.clientRepository.save(client);
  }
}

export { CreateClientUseCase };

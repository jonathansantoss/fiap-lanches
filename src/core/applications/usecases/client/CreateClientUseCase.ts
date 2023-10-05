import { ClientRepository } from "../../../../adapter/driven/infra/repositories/Client.repository";
import { IClient } from "../../../domain/entities/IClient.entity";
import { ICreateClientUseCase } from "../../ports/in/client/ICreateClientUseCases";

class CreateClientUseCase implements ICreateClientUseCase {
  constructor(private repository: ClientRepository) {}

  execute(client: IClient): void {
    this.repository.save(client);
  }
}

export { CreateClientUseCase };

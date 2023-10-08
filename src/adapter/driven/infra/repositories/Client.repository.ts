import { IClientRepository } from "../../../../core/applications/ports/out/client/IClient.repository";
import { IClient } from "../../../../core/domain/entities/IClient.entity";
import { Client } from "../../../data/Client.model";
import { AppDataSource } from "../../../../config/DataSource";
import { Repository } from "typeorm";

class ClientRepository implements IClientRepository {
  private repository: Repository<Client> = AppDataSource.getRepository(Client);

  save(Client: IClient): void {
    const clientCreated = this.repository.create(Client);
    this.repository.save(clientCreated);
  }
}

export { ClientRepository };

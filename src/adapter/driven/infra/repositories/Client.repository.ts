import { IClientRepository } from "../../../../core/applications/ports/IClient.repository";
import { IClient } from "../../../../core/domain/entities/IClient.entity";
import { Client } from "../../../data/Client.model";
import { AppDataSource } from "../config/DataSource";
import { Repository } from "typeorm";

class ClientRepository implements IClientRepository {
  private repository: Repository<Client> = AppDataSource.getRepository(Client);

  save(Client: IClient): void {
    throw new Error("Method not implemented.");
  }
}

export { ClientRepository };

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

  async delete(cpf: string): Promise<void> {
    await this.repository.delete({
      cpf,
    });
  }

  async findByCpf(cpf: string): Promise<IClient> {
    return await this.repository.findOne({
      where: {
        cpf,
      },
    });
  }

  async update(Client: IClient): Promise<void> {
    await this.repository.save(Client);
  }

  async getAllClients(): Promise<IClient[]> {
    return await this.repository.find();
  }
}

export { ClientRepository };

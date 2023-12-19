import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../../domain/models/IClientModel";
import { Client } from "../entity/ClientEntity";
import { AppDataSource } from "../../configurations/DataSource";
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
    // const clientRedis = await redis.get("client:" + cpf);

    // if (clientRedis !== null) {
    //   return JSON.parse(clientRedis) as IClient;
    // }

    const client = await this.repository.findOne({
      where: {
        cpf,
      },
    });

    if (!client) {
      return client;
    }

    // await redis.set("client:" + cpf, JSON.stringify(client));
    // await redis.expire("client:" + cpf, 1000);

    return client;
  }

  async update(Client: IClient): Promise<void> {
    await this.repository.save(Client);
  }

  async getAllClients(): Promise<IClient[]> {
    return await this.repository.find();
  }
}

export { ClientRepository };

import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../../domain/models/IClientModel";
import { IDataSource } from "../dataSource/IDataSource";

class ClientRepository implements IClientRepository {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  save(client: IClient): void {
    this.dataSource.save(client);
  }

  async delete(cpf: string): Promise<void> {
    await this.dataSource.deleteOneBy("cpf", cpf);
  }

  async findByCpf(cpf: string): Promise<IClient> {
    const client = await this.dataSource.findOneBy("cpf", cpf)
    return client;
  }

  async update(Client: IClient): Promise<void> {
    await this.dataSource.save(Client);
  }

  async getAllClients(): Promise<IClient[]> {
    return await this.dataSource.findAll();
  }
}

export { ClientRepository };

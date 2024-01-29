import { IClient } from "../../../../domain/entities/IClient.entity";

interface IClientRepository {
  save(Client: IClient): void;
  delete(cpf: string): Promise<void>;
  findByCpf(cpf: string): Promise<IClient>;
  update(Client: IClient): Promise<void>;
  getAllClients(): Promise<IClient[]>;
}

export { IClientRepository };

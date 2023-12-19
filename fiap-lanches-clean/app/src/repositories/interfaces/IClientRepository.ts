import { IClient } from "../../domain/models/IClientModel";
interface IClientRepository {
    save(Client: IClient): void;
    delete(cpf: string): Promise<void>;
    findByCpf(cpf: string): Promise<IClient>;
    update(Client: IClient): Promise<void>;
    getAllClients(): Promise<IClient[]>;
  }
  
  export { IClientRepository };
  
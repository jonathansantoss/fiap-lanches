import { IClient } from "../../domain/entities/IClient.entity";

interface IClientRepository {
  save(Client: IClient): void;
}

export { IClientRepository };

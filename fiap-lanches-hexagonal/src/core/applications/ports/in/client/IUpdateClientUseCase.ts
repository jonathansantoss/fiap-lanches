import { IClient } from "../../../../domain/entities/IClient.entity";

interface IUpdateClientUseCase {
  execute(client: IClient): Promise<void>;
}

export { IUpdateClientUseCase };

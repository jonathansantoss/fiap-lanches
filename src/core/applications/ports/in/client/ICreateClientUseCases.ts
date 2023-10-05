import { IClient } from "../../../../domain/entities/IClient.entity";

interface ICreateClientUseCase {
  execute(client: IClient): void;
}

export { ICreateClientUseCase };

import { IClient } from "../../../../domain/entities/IClient.entity";

interface IListClientUseCase {
  execute(): Promise<IClient[]>;
}

export { IListClientUseCase };

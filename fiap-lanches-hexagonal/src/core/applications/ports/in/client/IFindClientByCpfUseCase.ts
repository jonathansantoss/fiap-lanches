import { IClient } from "../../../../domain/entities/IClient.entity";

interface IFindClientByCpfUseCase {
  execute(cpf: string): Promise<IClient>;
}

export { IFindClientByCpfUseCase };

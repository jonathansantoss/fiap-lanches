import {IClient} from "../../../domain/models/IClientModel"

interface IFindClientByCpfService {
  execute(cpf: string): Promise<IClient>;
}

export { IFindClientByCpfService };

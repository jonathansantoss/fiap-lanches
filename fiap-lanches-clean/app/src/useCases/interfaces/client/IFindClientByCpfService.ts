import {IClient} from "../../../domain/models/IClientModel"
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";

interface IFindClientByCpfService {
  execute(cpf: string, clientRepository: IClientRepository): Promise<IClient>;
}

export { IFindClientByCpfService };

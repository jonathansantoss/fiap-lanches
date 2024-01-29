import {IClient} from "../../../domain/models/IClientModel"
import { ClientRepository } from "../../../repositories/impl/ClientRepository";
import { IFindClientByCpfService } from "./IFindClientByCpfService";
interface ICreateClientService {
  execute(client: IClient, repository: ClientRepository, findClientByCpfService: IFindClientByCpfService): Promise<void>;
}

export { ICreateClientService };

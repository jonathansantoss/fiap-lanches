import {IClient} from "../../../domain/models/IClientModel"
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";

interface IListClientService {
  execute(clientRepository: IClientRepository): Promise<IClient[]>;
}

export { IListClientService };

import {IClient} from "../../../domain/models/IClientModel"
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";

interface IUpdateClientService {
  execute(client: IClient, clientRepository: IClientRepository): Promise<void>;
}

export { IUpdateClientService };

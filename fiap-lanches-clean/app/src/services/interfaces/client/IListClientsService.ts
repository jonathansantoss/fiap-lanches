import {IClient} from "../../../domain/models/IClientModel"

interface IListClientsService {
  execute(): Promise<IClient[]>;
}

export { IListClientsService };

import {IClient} from "../../../domain/models/IClientModel"

interface IListClientService {
  execute(): Promise<IClient[]>;
}

export { IListClientService };

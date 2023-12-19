import {IClient} from "../../../domain/models/IClientModel"
interface ICreateClientService {
  execute(client: IClient): Promise<void>;
}

export { ICreateClientService };

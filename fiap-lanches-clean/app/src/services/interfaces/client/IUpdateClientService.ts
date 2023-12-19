import {IClient} from "../../../domain/models/IClientModel"

interface IUpdateClientService {
  execute(client: IClient): Promise<void>;
}

export { IUpdateClientService };

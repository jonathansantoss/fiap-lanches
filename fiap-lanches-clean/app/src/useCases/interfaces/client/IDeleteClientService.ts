import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";

interface IDeleteClientService {
  execute(cpf: string, clientRepository: IClientRepository): Promise<void>;
}

export { IDeleteClientService };

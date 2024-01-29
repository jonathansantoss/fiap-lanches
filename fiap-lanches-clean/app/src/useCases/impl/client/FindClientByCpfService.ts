import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";

class FindClientByCpfService implements IFindClientByCpfService {

  async execute(cpf: string, clientRepository: IClientRepository): Promise<IClient> {
    return await clientRepository.findByCpf(cpf);
  }
}

export { FindClientByCpfService };

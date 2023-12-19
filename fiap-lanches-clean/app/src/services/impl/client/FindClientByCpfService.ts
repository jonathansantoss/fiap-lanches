import { injectable, inject } from "tsyringe";
import { IClient } from "../../../domain/models/IClientModel";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";
import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";

@injectable()
class FindClientByCpfService implements IFindClientByCpfService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(cpf: string): Promise<IClient> {
    return await this.clientRepository.findByCpf(cpf);
  }
}

export { FindClientByCpfService };

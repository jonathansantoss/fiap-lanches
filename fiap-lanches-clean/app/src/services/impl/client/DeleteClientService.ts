import { injectable, inject } from "tsyringe";
import { IDeleteClientService } from "../../interfaces/client/IDeleteClientService";
import { IClientRepository } from "../../../repositories/interfaces/IClientRepository";

@injectable()
class DeleteClientService implements IDeleteClientService {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    await this.clientRepository.delete(cpf);
  }
}

export { DeleteClientService };

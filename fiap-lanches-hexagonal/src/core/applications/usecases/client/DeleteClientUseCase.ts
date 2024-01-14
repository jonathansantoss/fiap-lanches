import { injectable, inject } from "tsyringe";
import { IDeleteClientUseCase } from "../../ports/in/client/IDeleteClientUseCase";
import { IClientRepository } from "../../ports/out/client/IClient.repository";

@injectable()
class DeleteClientUseCase implements IDeleteClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    await this.clientRepository.delete(cpf);
  }
}

export { DeleteClientUseCase };

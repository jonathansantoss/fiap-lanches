import { Request, Response } from "express";
import { IFindClientByCpfService } from "../../useCases/interfaces/client/IFindClientByCpfService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { CreateClientService } from "../../useCases/impl/client/CreateClientService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";

class FindClientByCpfController {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response): Promise<Response> => {
    const clientRepository = new ClientRepository(this.dataSource);
    const findClientByCpfService = new FindClientByCpfService();

    const { cpf } = request.params;

    const client = await findClientByCpfService.execute(cpf, clientRepository);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    return response.status(200).send(client);
  }
}

export { FindClientByCpfController };

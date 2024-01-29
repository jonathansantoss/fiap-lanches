import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ListClientService } from "../../useCases/impl/client/ListClientService";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
class ListClientsController {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response): Promise<Response> => {
    const clientRepository = new ClientRepository(this.dataSource);

    const listClientService = new ListClientService();

    const clients = await listClientService.execute(clientRepository);

    return response.status(200).send(clients);
  }
}

export { ListClientsController };

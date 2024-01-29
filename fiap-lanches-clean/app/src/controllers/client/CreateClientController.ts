import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { CreateClientService } from "../../useCases/impl/client/CreateClientService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";

class CreateClientController {
  public dataSource: IDataSource;

  constructor (dataSource: IDataSource){
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response) => {
    const clientRepository = new ClientRepository(this.dataSource);

    const createClientService = new CreateClientService();
    const findClientByCpfService = new FindClientByCpfService();

    await createClientService.execute(request.body, clientRepository, findClientByCpfService).then(resp => {
      response.status(200).send({"message": "Client was created"})
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(error.status ? error.status : 500).send({ "error": error.message })
    });
  }
}

export { CreateClientController };

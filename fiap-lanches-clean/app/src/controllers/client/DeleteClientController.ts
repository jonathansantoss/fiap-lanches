import { Request, Response } from "express";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { DeleteClientService } from "../../useCases/impl/client/DeleteClientService";
import { ILogger } from "../../configurations/Logger/ILogger";

class DeleteClientController {

  public dataSource: IDataSource;
  public logger: ILogger;

  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger
  }

  handler = async (request: Request, response: Response): Promise<Response> => {
    const clientRepository = new ClientRepository(this.dataSource);

    const deleteClientService = new DeleteClientService();
    const findClientByCpfService = new FindClientByCpfService();

    const { cpf } = request.params;

    const client = await findClientByCpfService.execute(cpf, clientRepository);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await deleteClientService.execute(cpf, clientRepository);

    return response.status(200).send("Client was deleted with success");
  }
}

export { DeleteClientController };

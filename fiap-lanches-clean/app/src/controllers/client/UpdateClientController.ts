import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { CreateClientService } from "../../useCases/impl/client/CreateClientService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { UpdateClientService } from "../../useCases/impl/client/UpdateClientService";

class UpdateClientController {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response): Promise<Response> => {
    const clientRepository = new ClientRepository(this.dataSource);

    const updateClientService = new UpdateClientService();
    const findClientByCpfService = new FindClientByCpfService();

    const { cpf } = request.body;

    const client = await findClientByCpfService.execute(cpf, clientRepository);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await updateClientService.execute(request.body, clientRepository);

    return response.status(200).send("Client updated with success");
  }
}

export { UpdateClientController };

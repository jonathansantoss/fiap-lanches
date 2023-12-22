import { Request, Response } from "express";
import { IListClientService } from "../../../services/interfaces/client/IListClientService";
import { ListClientService } from "../../../services/impl/client/ListClientService"
import { container } from "../../../configurations/InjectionDependency";

class ListClientsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listClientService: IListClientService =
      container.resolve<IListClientService>(ListClientService);

    const clients = await listClientService.execute();

    return response.status(200).send(clients);
  }
}

export { ListClientsController };

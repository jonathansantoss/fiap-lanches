import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IListClientUseCase } from "../../../../core/applications/ports/in/client/IListClientsUseCase";
import { ListClientUseCase } from "../../../../core/applications/usecases/client/ListClientUseCase";

class ListClientsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listClientUseCase: IListClientUseCase =
      container.resolve<IListClientUseCase>(ListClientUseCase);

    const clients = await listClientUseCase.execute();

    return response.status(200).send(clients);
  }
}

export { ListClientsController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IUpdateClientUseCase } from "../../../../core/applications/ports/in/client/IUpdateClientUseCase";
import { UpdateClientUseCase } from "../../../../core/applications/usecases/client/UpdateClientUseCase";

class UpdateClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const updateClientUseCase: IUpdateClientUseCase =
      container.resolve<IUpdateClientUseCase>(UpdateClientUseCase);

    await updateClientUseCase.execute(request.body);

    return response.status(200).send();
  }
}

export { UpdateClientController };

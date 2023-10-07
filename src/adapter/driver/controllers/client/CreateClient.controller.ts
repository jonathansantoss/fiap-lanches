import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateClientUseCase } from "../../../../core/applications/usecases/client/CreateClientUseCase";
import { ICreateClientUseCase } from "../../../../core/applications/ports/in/client/ICreateClientUseCases";

class CreateClientController {
  handler(request: Request, response: Response) {
    const createClientUseCase: ICreateClientUseCase =
      container.resolve<ICreateClientUseCase>(CreateClientUseCase);

    createClientUseCase.execute(request.body);

    response.status(200).send();
  }
}

export { CreateClientController };

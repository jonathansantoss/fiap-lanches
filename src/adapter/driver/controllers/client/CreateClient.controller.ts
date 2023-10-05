import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateClientUseCase } from "../../../../core/applications/usecases/client/CreateClientUseCase";

class CreateClientController {
  handler(request: Request, response: Response) {
    const createClientUseCase = container.resolve(CreateClientUseCase);

    response.status(200).send("pong");
  }
}

export { CreateClientController };

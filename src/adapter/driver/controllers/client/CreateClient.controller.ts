import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateClientUseCase } from "../../../../core/applications/usecases/client/CreateClientUseCase";
import { ICreateClientUseCase } from "../../../../core/applications/ports/in/client/ICreateClientUseCases";
import { logger } from '../../../../config/WinstonLog';

class CreateClientController {
  async handler(request: Request, response: Response) {
    const createClientUseCase: ICreateClientUseCase =
      container.resolve<ICreateClientUseCase>(CreateClientUseCase);

    await createClientUseCase.execute(request.body).then(resp => {
      response.status(200).send({"message": "Client was created"})
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(error.status ? error.status : 500).send({ "error": error.message })
    });
  }
}

export { CreateClientController };

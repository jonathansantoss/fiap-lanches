import { Request, Response } from "express";
import { ICreateClientService } from "../../../services/interfaces/client/ICreateClientService";
import { CreateClientService } from "../../../services/impl/client/CreateClientService"
import { container } from "../../../configurations/InjectionDependency"
import { logger } from '../../../configurations/WinstonLog';

class CreateClientController {
  async handler(request: Request, response: Response) {
    const createClientService: ICreateClientService =
      container.resolve<ICreateClientService>(CreateClientService);

    await createClientService.execute(request.body).then(resp => {
      response.status(200).send({"message": "Client was created"})
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(error.status ? error.status : 500).send({ "error": error.message })
    });
  }
}

export { CreateClientController };

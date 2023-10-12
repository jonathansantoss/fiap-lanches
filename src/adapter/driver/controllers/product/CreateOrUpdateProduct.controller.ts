import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { ICreateOrUpdateProductUseCase } from "../../../../core/applications/ports/in/product/ICreateOrUpdateProductUseCase";
import { CreateOrUpdateProductUseCase } from "../../../../core/applications/usecases/product/CreateOrUpdateProductUseCase";
import { logger } from '../../../../config/WinstonLog';

class CreateOrUpdateProductController {
  handler(request: Request, response: Response) {
    const createProductUseCase: ICreateOrUpdateProductUseCase =
      container.resolve<ICreateOrUpdateProductUseCase>(CreateOrUpdateProductUseCase);

    createProductUseCase.execute(request.body).then(resp => {
      response.status(request.body.id ? 200 : 201).send({"message": `Product ${request.body.id ? 'updated' : 'created'}`, "productId": resp})
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(500).send({"error": error.message});
    })
  }
}

export { CreateOrUpdateProductController };

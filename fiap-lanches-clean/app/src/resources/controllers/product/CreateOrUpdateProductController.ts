import { Request, Response } from "express";
import { ICreateOrUpdateProductService } from "../../../services/interfaces/product/ICreateOrUpdateProductService";
import { CreateOrUpdateProductService } from "../../../services/impl/product/CreateOrUpdateProductService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class CreateOrUpdateProductController {
  handler(request: Request, response: Response) {
    const createProductService: ICreateOrUpdateProductService =
      container.resolve<ICreateOrUpdateProductService>(CreateOrUpdateProductService);

    createProductService.execute(request.body).then(resp => {
      response.status(request.body.id ? 200 : 201).send({"message": `Product ${request.body.id ? 'updated' : 'created'}`, "productId": resp})
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(500).send({"error": error.message});
    })
  }
}

export { CreateOrUpdateProductController };

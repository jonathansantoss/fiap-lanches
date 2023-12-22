import { Request, Response } from "express";
import { IGetProductByIdService } from "../../../services/interfaces/product/IGetProductByIdService";
import { GetProductByIdService } from "../../../services/impl/product/GetProductByIdService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class GetProductByIdController {
  handler(request: Request, response: Response) {
    const getProductByIdService: IGetProductByIdService =
      container.resolve<IGetProductByIdService>(GetProductByIdService);

      getProductByIdService.execute(request.query.id as string).then(resp => {
      response.status(200).send({ "message": "Product found", "product": resp })
    }).catch(error => {
      logger.error(`Get product by id: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByIdController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { logger } from '../../../../config/WinstonLog';
import { IGetProductByIdUseCase } from "../../../../core/applications/ports/in/product/IGetProductByIdUseCase";
import { GetProductByIdUseCase } from "../../../../core/applications/usecases/product/GetProductByIdUseCase";

class GetProductByIdController {
  handler(request: Request, response: Response) {
    const getProductByIdUseCase: IGetProductByIdUseCase =
      container.resolve<IGetProductByIdUseCase>(GetProductByIdUseCase);

      getProductByIdUseCase.execute(request.query.id as string).then(resp => {
      response.status(200).send({ "message": "Product found", "product": resp })
    }).catch(error => {
      logger.error(`Get product by id: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByIdController };

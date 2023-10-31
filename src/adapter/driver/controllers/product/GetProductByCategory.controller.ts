import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IGetProductByCategoryUseCase } from "../../../../core/applications/ports/in/product/IGetProductByCategoryUseCase";
import { GetProductByCategoryUseCase } from "../../../../core/applications/usecases/product/GetProductByCategoryUseCase";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";
import { logger } from '../../../../config/WinstonLog';

class GetProductByCategoryController {
  handler(request: Request, response: Response) {
    const createGetProductUseCase: IGetProductByCategoryUseCase =
      container.resolve<IGetProductByCategoryUseCase>(GetProductByCategoryUseCase);

    createGetProductUseCase.execute(request.query.category as EProductCategory).then(resp => {
      response.status(200).send({ "message": "Products found", "products": resp })
    }).catch(error => {
      logger.error(`Get product by category: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByCategoryController };

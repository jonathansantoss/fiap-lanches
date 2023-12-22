import { Request, Response } from "express";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IGetProductByCategoryService } from "../../../services/interfaces/product/IGetProductByCategoryService";
import { GetProductByCategoryService } from "../../../services/impl/product/GetProductByCategoryService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class GetProductByCategoryController {
  handler(request: Request, response: Response) {
    const createGetProductService: IGetProductByCategoryService =
      container.resolve<IGetProductByCategoryService>(GetProductByCategoryService);

    createGetProductService.execute(request.query.category as EProductCategory).then(resp => {
      response.status(200).send({ "message": "Products found", "products": resp })
    }).catch(error => {
      logger.error(`Get product by category: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByCategoryController };

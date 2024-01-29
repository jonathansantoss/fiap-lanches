import { Request, Response } from "express";
import { container } from "tsyringe";
import { logger } from "../../configurations/WinstonLog";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { GetProductByCategoryService } from "../../useCases/impl/product/GetProductByCategoryService";
import { IGetProductByCategoryService } from "../../useCases/interfaces/product/IGetProductByCategoryService";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";

class GetProductByCategoryController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }


  handler = async (request: Request, response: Response) => {
    const createGetProductService = new GetProductByCategoryService();
    const productRepository = new ProductRepository(this.dataSource);

    createGetProductService.execute(request.query.category as EProductCategory, productRepository).then(resp => {
      response.status(200).send({ "message": "Products found", "products": resp })
    }).catch(error => {
      logger.error(`Get product by category: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByCategoryController };

import { Request, Response } from "express";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { GetProductByCategoryService } from "../../useCases/impl/product/GetProductByCategoryService";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ILogger } from "../../configurations/Logger/ILogger";

class GetProductByCategoryController {

  public dataSource: IDataSource;
  public logger: ILogger

  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger
  }


  handler = async (request: Request, response: Response) => {
    const createGetProductService = new GetProductByCategoryService();
    const productRepository = new ProductRepository(this.dataSource);

    createGetProductService.execute(request.query.category as EProductCategory, productRepository).then(resp => {
      response.status(200).send({ "message": "Products found", "products": resp })
    }).catch(error => {
      this.logger.error(`Get product by category: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByCategoryController };

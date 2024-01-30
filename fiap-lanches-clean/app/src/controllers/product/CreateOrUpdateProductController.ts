import { Request, Response } from "express";
import { CreateOrUpdateProductService } from "../../useCases/impl/product/CreateOrUpdateProductService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { ILogger } from "../../configurations/Logger/ILogger";

class CreateOrUpdateProductController {

  public dataSource: IDataSource;
  public logger: ILogger;

  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger;
  }

  handler = async (request: Request, response: Response) => {
    const createProductService = new CreateOrUpdateProductService();
    const productRepository = new ProductRepository(this.dataSource);

    createProductService.execute(request.body, productRepository).then(resp => {
      response.status(request.body.id ? 200 : 201).send({ "message": `Product ${request.body.id ? 'updated' : 'created'}`, "productId": resp })
    }).catch(error => {
      this.logger.error(`Post/Put product: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrUpdateProductController };

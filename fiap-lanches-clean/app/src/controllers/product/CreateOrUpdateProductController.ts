import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { CreateOrUpdateProductService } from "../../useCases/impl/product/CreateOrUpdateProductService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";

class CreateOrUpdateProductController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response) => {
    const createProductService = new CreateOrUpdateProductService();
    const productRepository = new ProductRepository(this.dataSource);

    createProductService.execute(request.body, productRepository).then(resp => {
      response.status(request.body.id ? 200 : 201).send({ "message": `Product ${request.body.id ? 'updated' : 'created'}`, "productId": resp })
    }).catch(error => {
      logger.error(`Post/Put product: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrUpdateProductController };

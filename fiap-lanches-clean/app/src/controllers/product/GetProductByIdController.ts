import { Request, Response } from "express";
import { GetProductByIdService } from "../../useCases/impl/product/GetProductByIdService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { ILogger } from "../../configurations/Logger/ILogger";

class GetProductByIdController {
  public dataSource: IDataSource;
  public logger: ILogger;

  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger;
  }


  handler = async (request: Request, response: Response) => {
    const getProductByIdService = new GetProductByIdService();
    const productRepository = new ProductRepository(this.dataSource);

    getProductByIdService.execute(request.query.id as string, productRepository).then(resp => {
      response.status(200).send({ "message": "Product found", "product": resp })
    }).catch(error => {
      this.logger.error(`Get product by id: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByIdController };

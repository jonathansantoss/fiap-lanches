import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { GetProductByIdService } from "../../useCases/impl/product/GetProductByIdService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";

class GetProductByIdController {
  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }


  handler = async (request: Request, response: Response) => {
    const getProductByIdService = new GetProductByIdService();
    const productRepository = new ProductRepository(this.dataSource);

    getProductByIdService.execute(request.query.id as string, productRepository).then(resp => {
      response.status(200).send({ "message": "Product found", "product": resp })
    }).catch(error => {
      logger.error(`Get product by id: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetProductByIdController };

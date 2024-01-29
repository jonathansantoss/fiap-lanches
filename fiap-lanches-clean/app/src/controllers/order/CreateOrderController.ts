import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { CreateOrderService } from "../../useCases/impl/order/CreateOrderService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetProductByIdsService } from "../../useCases/impl/product/GetProductByIdsService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { ProductRepository } from "../../repositories/impl/ProductRepository";

class CreateOrderController {

  public dataSource: IDataSource;
  public clientDataSource: IDataSource;
  public productDataSource: IDataSource;

  constructor(dataSource: IDataSource, clientDataSource: IDataSource, productDataSource: IDataSource) {
    this.dataSource = dataSource;
    this.clientDataSource = clientDataSource;
    this.productDataSource = productDataSource;
  }

  handler = async (request: Request, response: Response) => {
    const orderRepository = new OrderRepository(this.dataSource);
    const clientRepository = new ClientRepository(this.clientDataSource);
    const productRepository = new ProductRepository(this.productDataSource);

    const createOrderService = new CreateOrderService();
    const getProdutBtIdsService = new GetProductByIdsService();
    const findClientByCpfService = new FindClientByCpfService();

    await createOrderService.execute(request.body, orderRepository, getProdutBtIdsService, findClientByCpfService, clientRepository, productRepository).then(resp => {
      response.status(200).send({ "message": "Order created", "orderId": resp });
    }
    ).catch(error => {
      logger.error(`Post order: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrderController };

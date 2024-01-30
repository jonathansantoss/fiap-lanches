import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { CreateOrderService } from "../../useCases/impl/order/CreateOrderService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetProductByIdsService } from "../../useCases/impl/product/GetProductByIdsService";
import { FindClientByCpfService } from "../../useCases/impl/client/FindClientByCpfService";
import { ClientRepository } from "../../repositories/impl/ClientRepository";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { ILogger } from "../../configurations/Logger/ILogger";

class CreateOrderController {

  public dataSource: IDataSource;
  public clientDataSource: IDataSource;
  public productDataSource: IDataSource;
  public logger: ILogger;

  constructor(dataSource: IDataSource, clientDataSource: IDataSource, productDataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.clientDataSource = clientDataSource;
    this.productDataSource = productDataSource;
    this.logger = logger;
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
      this.logger.error(`Post order: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrderController };

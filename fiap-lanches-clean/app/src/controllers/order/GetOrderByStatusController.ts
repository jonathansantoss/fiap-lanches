import { Request, Response } from "express";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { GetOrderByStatusService } from "../../useCases/impl/order/GetOrderByStatusService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { ILogger } from "../../configurations/Logger/ILogger";


class GetOrderByStatusController {

  public dataSource: IDataSource;
  public logger: ILogger;

  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger
  }

  handler = async (request: Request, response: Response) => {
    const orderRepository = new OrderRepository(this.dataSource);
    const getOrderByStatus = new GetOrderByStatusService();

    await getOrderByStatus.execute(request.query.status as EOrderStatus, orderRepository).then(resp => {
      response.status(200).send({ "message": "Orders found", "orders": resp });
    }
    ).catch(error => {
      this.logger.error(`Get order by status: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetOrderByStatusController };

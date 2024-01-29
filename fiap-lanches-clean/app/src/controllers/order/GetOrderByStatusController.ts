import { Request, Response } from "express";
import { container } from "tsyringe";
import { logger } from "../../configurations/WinstonLog";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { GetOrderByStatusService } from "../../useCases/impl/order/GetOrderByStatusService";
import { IGetOrderByStatusService } from "../../useCases/interfaces/order/IGetOrderByStatusService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";


class GetOrderByStatusController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response) => {
    const orderRepository = new OrderRepository(this.dataSource);
    const getOrderByStatus = new GetOrderByStatusService();

    await getOrderByStatus.execute(request.query.status as EOrderStatus, orderRepository).then(resp => {
      response.status(200).send({ "message": "Orders found", "orders": resp });
    }
    ).catch(error => {
      logger.error(`Get order by status: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetOrderByStatusController };

import { Request, Response } from "express";
import { GetAllUnfinishedOrdersService } from "../../useCases/impl/order/GetAllUnfinishedOrdersService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { ILogger } from "../../configurations/Logger/ILogger";


class GetAllUnfinishedOrdersController {

  public dataSource: IDataSource;
  public logger: ILogger;


  constructor(dataSource: IDataSource, logger: ILogger) {
    this.dataSource = dataSource;
    this.logger = logger
  }

  handler = async (request: Request, response: Response) => {
    const orderRepository = new OrderRepository(this.dataSource);

    const getAllUnfinishedOrdersService = new GetAllUnfinishedOrdersService();

    await getAllUnfinishedOrdersService.execute(orderRepository)
      .then(resp => {
        response.status(200).send(
          {
            "message": "Orders found",
            "orders": resp
          }
        )
      })
      .catch(error => {
        this.logger.error(`Get orders: ${error.message}`)
        response.status(500).send({ "error": error.message });
      })
  }
}

export { GetAllUnfinishedOrdersController };

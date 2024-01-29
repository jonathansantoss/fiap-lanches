import { Request, Response } from "express";
import { container } from "tsyringe";
import { logger } from "../../configurations/WinstonLog";
import { GetAllUnfinishedOrdersService } from "../../useCases/impl/order/GetAllUnfinishedOrdersService";
import { IGetAllUnfinishedOrdersService } from "../../useCases/interfaces/order/IGetAllUnfinishedOrdersService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";


class GetAllUnfinishedOrdersController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
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
        logger.error(`Get orders: ${error.message}`)
        response.status(500).send({ "error": error.message });
      })
  }
}

export { GetAllUnfinishedOrdersController };

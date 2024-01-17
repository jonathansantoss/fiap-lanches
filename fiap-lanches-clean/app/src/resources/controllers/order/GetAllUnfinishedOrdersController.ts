import { Request, Response } from "express";
import { IGetAllUnfinishedOrdersService } from "../../../services/interfaces/order/IGetAllUnfinishedOrdersService";
import { GetAllUnfinishedOrdersService } from "../../../services/impl/order/GetAllUnfinishedOrdersService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class GetAllUnfinishedOrdersController {
  async handler(request: Request, response: Response) {
    const getAllUnfinishedOrdersService: IGetAllUnfinishedOrdersService = 
      container.resolve<IGetAllUnfinishedOrdersService>(GetAllUnfinishedOrdersService)
      await getAllUnfinishedOrdersService.execute()
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

import { Request, Response } from "express";
import { IGetOrderByStatusService } from "../../../services/interfaces/order/IGetOrderByStatusService";
import { GetOrderByStatusService } from "../../../services/impl/order/GetOrderByStatusService";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus"
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class GetOrderByStatusController {
  async handler(request: Request, response: Response) {
    const getOrderByStatus: IGetOrderByStatusService =
      container.resolve<IGetOrderByStatusService>(GetOrderByStatusService);

    await getOrderByStatus.execute(request.query.status as EOrderStatus).then(resp => {
      response.status(200).send({ "message": "Orders found", "orders": resp });
    }
    ).catch(error => {
      logger.error(`Get order by status: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { GetOrderByStatusController };

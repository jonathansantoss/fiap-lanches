import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { logger } from '../../../../config/WinstonLog';
import { IGetOrderByStatusUseCase } from "../../../../core/applications/ports/in/order/IGetOrderByStatusUseCase";
import { GetOrderByStatusUseCase } from "../../../../core/applications/usecases/order/GetProductByCategoryUseCase";
import { EOrderStatus } from "../../../../core/domain/enums/EOrderStatus";

class GetOrderByStatusController {
  async handler(request: Request, response: Response) {
    const getOrderByStatus: IGetOrderByStatusUseCase =
      container.resolve<IGetOrderByStatusUseCase>(GetOrderByStatusUseCase);

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

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateOrderUseCase } from "../../../../core/applications/usecases/order/CreateOrderUseCase";
import { ICreateOrderUseCase } from "../../../../core/applications/ports/in/order/ICreateOrderUseCase";
import { logger } from '../../../../config/WinstonLog';

class CreateOrderController {
  async handler(request: Request, response: Response) {
    const createOrderUseCase: ICreateOrderUseCase =
      container.resolve<ICreateOrderUseCase>(CreateOrderUseCase);

    await createOrderUseCase.execute(request.body).then(resp => {
      response.status(200).send({ "message": "Order created", "orderId": resp });
    }
    ).catch(error => {
      logger.error(`Post order: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrderController };

import { Request, Response } from "express";
import { ICreateOrderService } from "../../../services/interfaces/order/ICreateOrderService";
import { CreateOrderService } from "../../../services/impl/order/CreateOrderService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class CreateOrderController {
  async handler(request: Request, response: Response) {
    const createOrderService: ICreateOrderService =
      container.resolve<ICreateOrderService>(CreateOrderService);

    await createOrderService.execute(request.body).then(resp => {
      response.status(200).send({ "message": "Order created", "orderId": resp });
    }
    ).catch(error => {
      logger.error(`Post order: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { CreateOrderController };

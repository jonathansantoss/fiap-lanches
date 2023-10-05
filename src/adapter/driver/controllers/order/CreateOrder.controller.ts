import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateOrderUseCase } from "../../../../core/applications/usecases/order/CreateOrderUseCase";
import { ICreateOrderUseCase } from "../../../../core/applications/ports/in/order/ICreateOrderUseCase";

class CreateOrderController {
  handler(request: Request, response: Response) {
    const createOrderUseCase: ICreateOrderUseCase =
      container.resolve<ICreateOrderUseCase>(CreateOrderUseCase);

    response.status(200).send("pong");
  }
}

export { CreateOrderController };

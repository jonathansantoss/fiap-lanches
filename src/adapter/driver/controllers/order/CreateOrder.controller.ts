import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrderUseCase } from "../../../../core/applications/usecases/order/CreateOrderUseCase";

class CreateOrderController {
  handler(request: Request, response: Response) {
    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    response.status(200).send("pong");
  }
}

export { CreateOrderController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreatePaymentUseCase } from "../../../../core/applications/usecases/payment/CreatePaymentUseCase";
import { ICreatePaymentUseCase } from "../../../../core/applications/ports/in/payment/ICreatePaymentUseCase";
import { GetOrderByIdUseCase } from "../../../../core/applications/usecases/order/GetOrderByIdUseCase";
import { IGetOrderByIdUseCase } from "../../../../core/applications/ports/in/order/IGetOrderByIdUseCase";

class CreatePaymentConroller {
  async handler(request: Request, response: Response): Promise<Response> {
    const orderId: string = request.query.orderId as string;

    console.log(orderId)

    const createPaymentUseCase: ICreatePaymentUseCase =
      container.resolve(CreatePaymentUseCase);

    const getOrderByIdUseCase: IGetOrderByIdUseCase =
      container.resolve(GetOrderByIdUseCase);

    const order = await getOrderByIdUseCase.execute(orderId);

    if (!order) {
      return response.status(404).send("Nout found order!");
    }

    await createPaymentUseCase.execute(orderId);

    return response.status(200).send("updated status payment of order!");
  }
}

export { CreatePaymentConroller };

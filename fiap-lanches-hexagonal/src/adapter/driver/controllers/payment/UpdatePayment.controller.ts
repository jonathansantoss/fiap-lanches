import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { UpdatePaymentUseCase } from "../../../../core/applications/usecases/payment/UpdatePaymentUseCase";
import { IUpdatePaymentUseCase } from "../../../../core/applications/ports/in/payment/IUpdatePaymentUseCase";
import { GetOrderByIdUseCase } from "../../../../core/applications/usecases/order/GetOrderByIdUseCase";
import { IGetOrderByIdUseCase } from "../../../../core/applications/ports/in/order/IGetOrderByIdUseCase";

class UpdatePaymentConroller {
  async handler(request: Request, response: Response): Promise<Response> {
    const orderId: string = request.query.orderId as string;

    const updatePaymentUseCase: IUpdatePaymentUseCase =
      container.resolve(UpdatePaymentUseCase);

    const getOrderByIdUseCase: IGetOrderByIdUseCase =
      container.resolve(GetOrderByIdUseCase);

    const order = await getOrderByIdUseCase.execute(orderId);

    if (!order) {
      return response.status(404).send("Nout found order!");
    }

    await updatePaymentUseCase.execute(orderId);

    return response.status(200).send("updated status payment of order!");
  }
}

export { UpdatePaymentConroller };

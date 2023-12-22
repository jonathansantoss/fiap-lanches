import { Request, Response } from "express";
import { IGetOrderByIdService } from "../../../services/interfaces/order/IGetOrderByIdService";
import { IUpdatePaymentService } from "../../../services/interfaces/payment/IUpdatePaymentService";
import { GetOrderByIdService } from "../../../services/impl/order/GetOrderByIdService";
import { UpdatePaymentService } from "../../../services/impl/payment/UpdatePaymentService";
import { container } from "../../../configurations/InjectionDependency";

class UpdatePaymentConroller {
  async handler(request: Request, response: Response): Promise<Response> {
    const orderId: string = request.query.orderId as string;

    const updatePaymentService: IUpdatePaymentService =
      container.resolve(UpdatePaymentService);

    const getOrderByIdService: IGetOrderByIdService =
      container.resolve(GetOrderByIdService);

    const order = await getOrderByIdService.execute(orderId);

    if (!order) {
      return response.status(404).send("Nout found order!");
    }

    await updatePaymentService.execute(orderId);

    return response.status(200).send("updated status payment of order!");
  }
}

export { UpdatePaymentConroller };

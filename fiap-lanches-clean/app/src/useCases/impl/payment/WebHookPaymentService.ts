import { EOrderPayment } from "../../../domain/enums/EPayment";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IWebHookPaymentService } from "../../interfaces/payment/IWebHookPaymentService";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { IOrder } from "../../../domain/models/IOrderModel";
import { CustomError } from "../../../domain/exceptions/Exceptions";

class WebHookPaymentService implements IWebHookPaymentService {


  async execute(statusCode: number, orderId: string, getOrderByIdUseCase: IGetOrderByIdService, orderRepository: IOrderRepository): Promise<string> {
    let paymentStatus: EOrderPayment = statusCode == 200 ? EOrderPayment.APPROVED : EOrderPayment.REFUSED;

    const order: IOrder = await getOrderByIdUseCase.execute(orderId, orderRepository).then(resp => {
      return resp
    });

    if (!order) {
      throw new CustomError(`Order ${orderId} not found`, 404)
    }

    order.payment = paymentStatus;
    return orderRepository.saveOrUpdate(order);
  }
}

export { WebHookPaymentService };

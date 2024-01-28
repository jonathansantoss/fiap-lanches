import { inject, injectable } from "tsyringe";
import { EOrderPayment } from "../../../domain/enums/EPayment";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IUpdatePaymentService } from "../../interfaces/payment/IUpdatePaymentService";
import { IWebHookPaymentService } from "../../interfaces/payment/IWebHookPaymentService";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { IOrder } from "../../../domain/models/IOrderModel";
import { CustomError } from "../../exceptions/Exceptions";

@injectable()
class WebHookPaymentService implements IWebHookPaymentService {
  constructor(
    @inject("GetOrderByIdService") private getOrderByIdUseCase: IGetOrderByIdService,
    @inject("OrderRepository") private orderRepository: IOrderRepository,
  ) { }

  async execute(statusCode: number, orderId: string): Promise<string> {
    let paymentStatus: EOrderPayment = statusCode == 200 ? EOrderPayment.APPROVED : EOrderPayment.REFUSED;

    const order: IOrder = await this.getOrderByIdUseCase.execute(orderId).then(resp => {
      return resp
    });

    if (!order) {
      throw new CustomError(`Order ${orderId} not found`, 404)
    }

    order.payment = paymentStatus;
    return this.orderRepository.saveOrUpdate(order);
  }
}

export { WebHookPaymentService };

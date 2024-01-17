import { inject, injectable } from "tsyringe";
import { IUpdatePaymentUseCase } from "../../ports/in/payment/IUpdatePaymentUseCase";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { EOrderPayment } from "../../../domain/enums/EPayment";

@injectable()
class UpdatePaymentUseCase implements IUpdatePaymentUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) {}

  async execute(orderId: string): Promise<void> {
    const order = await this.orderRepository.getById(orderId);
    order.payment = EOrderPayment.APPROVED;

    await this.orderRepository.saveOrUpdate(order);
  }
}

export { UpdatePaymentUseCase };

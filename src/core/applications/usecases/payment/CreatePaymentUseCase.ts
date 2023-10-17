import { inject, injectable } from "tsyringe";
import { ICreatePaymentUseCase } from "../../ports/in/payment/ICreatePaymentUseCase";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { EOrderPayment } from "../../../domain/enums/EPayment";

@injectable()
class CreatePaymentUseCase implements ICreatePaymentUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) {}

  async execute(orderId: string): Promise<void> {
    const order = await this.orderRepository.getById(orderId);
    order.payment = EOrderPayment.APPROVED;

    await this.orderRepository.saveOrUpdate(order);
  }
}

export { CreatePaymentUseCase };

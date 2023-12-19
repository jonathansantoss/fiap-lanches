import { inject, injectable } from "tsyringe";
import { EOrderPayment } from "../../../domain/enums/EPayment";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IUpdatePaymentService } from "../../interfaces/payment/IUpdatePaymentService";

@injectable()
class UpdatePaymentService implements IUpdatePaymentService {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) {}

  async execute(orderId: string): Promise<void> {
    const order = await this.orderRepository.getById(orderId);
    order.payment = EOrderPayment.APPROVED;

    await this.orderRepository.saveOrUpdate(order);
  }
}

export { UpdatePaymentService };

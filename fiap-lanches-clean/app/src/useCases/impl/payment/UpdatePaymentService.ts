import { EOrderPayment } from "../../../domain/enums/EPayment";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IUpdatePaymentService } from "../../interfaces/payment/IUpdatePaymentService";

class UpdatePaymentService implements IUpdatePaymentService {

  async execute(orderId: string, orderRepository: IOrderRepository): Promise<void> {
    const order = await orderRepository.getById(orderId);
    order.payment = EOrderPayment.APPROVED;

    await orderRepository.saveOrUpdate(order);
  }
}

export { UpdatePaymentService };

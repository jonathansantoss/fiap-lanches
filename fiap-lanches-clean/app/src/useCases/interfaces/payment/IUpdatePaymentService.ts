import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";

interface IUpdatePaymentService {
  execute(orderid: string, orderRepository: IOrderRepository): Promise<void>;
}

export { IUpdatePaymentService };

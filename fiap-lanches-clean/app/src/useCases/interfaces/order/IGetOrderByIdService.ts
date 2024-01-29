import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";

interface IGetOrderByIdService {
  execute(orderId: string, orderRepository: IOrderRepository): Promise<IOrder>;
}

export { IGetOrderByIdService };

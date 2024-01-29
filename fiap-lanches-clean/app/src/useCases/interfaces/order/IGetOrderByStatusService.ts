import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
interface IGetOrderByStatusService {
  execute(status: EOrderStatus, orderRepository: IOrderRepository): Promise<IOrder[]>;
}

export { IGetOrderByStatusService };

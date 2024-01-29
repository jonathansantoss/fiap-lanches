import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "./IGetOrderByIdService";

interface IUpdateOrderStatusService {
  execute(orderId: string, orderStatus: EOrderStatus, orderRepository: IOrderRepository, getOrderByIdUseCase: IGetOrderByIdService): Promise<string>;
}

export { IUpdateOrderStatusService };

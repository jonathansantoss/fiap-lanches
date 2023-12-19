import { injectable, inject } from "tsyringe";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IUpdateOrderStatusService } from "../../interfaces/order/IUpdateOrderStatusService";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { CustomError } from "../../exceptions/Exceptions";

@injectable()
class UpdateOrderStatusService implements IUpdateOrderStatusService {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository,
    @inject("GetOrderByIdService") private getOrderByIdUseCase: IGetOrderByIdService
  ) { }

  async execute(orderId: string, status: EOrderStatus): Promise<string> {
    const order: IOrder = await this.getOrderByIdUseCase.execute(orderId).then(resp => resp);

    if (!order) {
        throw new CustomError(`Order ${orderId} not found`, 404) 
    }

    order.status = status
    return this.orderRepository.saveOrUpdate(order);
  }
}

export { UpdateOrderStatusService };

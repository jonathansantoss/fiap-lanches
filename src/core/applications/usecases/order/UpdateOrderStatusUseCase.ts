import { injectable, inject } from "tsyringe";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IUpdateOrderStatusUseCase } from "../../ports/in/order/IUpdateOrderStatusUseCase";
import { IGetOrderByIdUseCase } from "../../ports/in/order/IGetOrderByIdUseCase";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { CustomError } from "../../../domain/exceptions/Exceptions";

@injectable()
class UpdateOrderStatusUseCase implements IUpdateOrderStatusUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository,
    @inject("GetOrderByIdUseCase") private getOrderByIdUseCase: IGetOrderByIdUseCase
  ) { }

  async execute(orderId: string, status: EOrderStatus): Promise<string> {
    const order: IOrder = await this.getOrderByIdUseCase.execute(orderId).then(resp => resp);

    if (!order) {
        new CustomError(`Order ${orderId} not found`, 404) 
    }

    order.status = status
    return this.orderRepository.saveOrUpdate(order);
  }
}

export { UpdateOrderStatusUseCase };

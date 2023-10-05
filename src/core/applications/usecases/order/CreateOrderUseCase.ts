import { injectable, inject } from "tsyringe";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { ICreateOrderUseCase } from "../../ports/in/order/ICreateOrderUseCase";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";

@injectable()
class CreateOrderUseCase implements ICreateOrderUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) {}

  execute(order: IOrder): void {
    this.orderRepository.save(order);
  }
}

export { CreateOrderUseCase };

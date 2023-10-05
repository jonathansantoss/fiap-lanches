import { OrderRepository } from "../../../../adapter/driven/infra/repositories/Order.repository";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { ICreateOrderUseCase } from "../../ports/in/order/ICreateOrderUseCase";

class CreateOrderUseCase implements ICreateOrderUseCase {
  constructor(private repository: OrderRepository) {}

  execute(order: IOrder): void {
    this.repository.save(order);
  }
}

export { CreateOrderUseCase };

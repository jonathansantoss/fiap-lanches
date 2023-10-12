import { injectable, inject } from "tsyringe";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { IGetOrderByIdUseCase } from "../../ports/in/order/IGetOrderByIdUseCase";

@injectable()
class GetOrderByIdUseCase implements IGetOrderByIdUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) { }

  async execute(id: string): Promise<IOrder> {
    return this.orderRepository.getById(id);
  }
}

export { GetOrderByIdUseCase };

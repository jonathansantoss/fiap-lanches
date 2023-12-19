import { injectable, inject } from "tsyringe";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";

@injectable()
class GetOrderByIdService implements IGetOrderByIdService {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository
  ) { }

  async execute(id: string): Promise<IOrder> {
    return this.orderRepository.getById(id);
  }
}

export { GetOrderByIdService };

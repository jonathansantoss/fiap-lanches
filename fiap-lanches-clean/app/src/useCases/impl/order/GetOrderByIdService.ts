import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";

class GetOrderByIdService implements IGetOrderByIdService {

  async execute(id: string, orderRepository: IOrderRepository): Promise<IOrder> {
    return orderRepository.getById(id);
  }
}

export { GetOrderByIdService };

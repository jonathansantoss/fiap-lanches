import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetAllUnfinishedOrdersService } from "../../interfaces/order/IGetAllUnfinishedOrdersService";

class GetAllUnfinishedOrdersService implements IGetAllUnfinishedOrdersService {

    async execute(orderRepository: IOrderRepository): Promise<IOrder[]> {
        return orderRepository.getAllUnfinishedOrders();
    }
}

export { GetAllUnfinishedOrdersService };
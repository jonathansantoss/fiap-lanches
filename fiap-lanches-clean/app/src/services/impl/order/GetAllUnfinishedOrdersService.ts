import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetAllUnfinishedOrdersService } from "../../interfaces/order/IGetAllUnfinishedOrdersService";
import { injectable, inject } from "tsyringe";

@injectable()
class GetAllUnfinishedOrdersService implements IGetAllUnfinishedOrdersService {
    constructor(
        @inject("OrderRepository") private orderRepository: IOrderRepository
    ) { }
    async execute(): Promise<IOrder[]> {
        return this.orderRepository.getAllUnfinishedOrders();
    }
}

export { GetAllUnfinishedOrdersService };
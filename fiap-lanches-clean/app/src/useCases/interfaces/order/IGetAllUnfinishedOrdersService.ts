import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";

interface IGetAllUnfinishedOrdersService {
    execute(orderRepository: IOrderRepository): Promise<IOrder[]>;
}

export {IGetAllUnfinishedOrdersService};
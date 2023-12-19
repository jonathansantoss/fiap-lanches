
import { inject, injectable } from "tsyringe";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByStatusService } from "../../interfaces/order/IGetOrderByStatusService";

@injectable()
class GetOrderByStatusService implements IGetOrderByStatusService {
    constructor(
        @inject("OrderRepository") private orderRepository: IOrderRepository
    ) { }

    execute(status: EOrderStatus): Promise<IOrder[]> {
        return this.orderRepository.getByStatus(status);
    }
}
export { GetOrderByStatusService };
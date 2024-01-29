
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByStatusService } from "../../interfaces/order/IGetOrderByStatusService";

class GetOrderByStatusService implements IGetOrderByStatusService {

    execute(status: EOrderStatus, orderRepository: IOrderRepository): Promise<IOrder[]> {
        return orderRepository.getByStatus(status);
    }
}
export { GetOrderByStatusService };
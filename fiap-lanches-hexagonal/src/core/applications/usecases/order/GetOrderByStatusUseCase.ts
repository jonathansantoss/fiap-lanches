
import { inject, injectable } from "tsyringe";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { IGetOrderByStatusUseCase } from "../../ports/in/order/IGetOrderByStatusUseCase";

@injectable()
class GetOrderByStatusUseCase implements IGetOrderByStatusUseCase {
    constructor(
        @inject("OrderRepository") private orderRepository: IOrderRepository
    ) { }

    execute(status: EOrderStatus): Promise<IOrder[]> {
        return this.orderRepository.getByStatus(status);
    }
}
export { GetOrderByStatusUseCase };
import { IOrderRepository } from "../../../../core/applications/ports/IOrder.repository";
import { IOrder } from "../../../../core/domain/entities/IOrder.entity";

class OrderRepository implements IOrderRepository {
    save(order: IOrder): void {
        throw new Error("Method not implemented.");
    }

}

export { OrderRepository };

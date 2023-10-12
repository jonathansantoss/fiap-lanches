import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface IOrderRepository {
  save(order: IOrder): Promise<string>;
}

export { IOrderRepository };

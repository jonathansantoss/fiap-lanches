import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface IOrderRepository {
  save(order: IOrder): void;
}

export { IOrderRepository };

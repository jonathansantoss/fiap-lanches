import { IOrder } from "../../../../domain/entities/IOrder.entity";
import { EOrderStatus } from "../../../../domain/enums/EOrderStatus";

interface IOrderRepository {
  saveOrUpdate(order: IOrder): Promise<string>;
  getById(id: string): Promise<IOrder>;
  getByStatus(status: EOrderStatus): Promise<IOrder[]>
}

export { IOrderRepository };

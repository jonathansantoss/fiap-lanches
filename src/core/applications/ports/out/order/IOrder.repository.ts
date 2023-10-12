import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface IOrderRepository {
  saveOrUpdate(order: IOrder): Promise<string>;
  getById(id: string): Promise<IOrder>;
}

export { IOrderRepository };

import { IOrderRepository } from "../../../../../core/applications/ports/out/order/IOrder.repository";
import { IOrder } from "../../../../../core/domain/entities/IOrder.entity";
import { EOrderStatus } from "../../../../../core/domain/enums/EOrderStatus";

class OrderInMemoryRepository implements IOrderRepository {
  private orders: IOrder[] = [];

  async saveOrUpdate(order: IOrder): Promise<string> {
    const isExistsOrder = this.orders.some((order) => order.id === order.id);

    if (isExistsOrder) {
      return "Not found Order";
    }

    this.orders.push(order);
  }

  async getById(id: string): Promise<IOrder> {
    const order: IOrder = await this.orders.find((order) => order.id === id);
    return order;
  }

  async getByStatus(status: EOrderStatus): Promise<IOrder[]> {
    const order: IOrder[] = await this.orders.filter((order) => order.status === status);
    return order;
  }
}

export { OrderInMemoryRepository };

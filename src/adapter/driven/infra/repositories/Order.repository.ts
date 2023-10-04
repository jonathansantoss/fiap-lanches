import { IOrderRepository } from "../../../../core/applications/ports/IOrder.repository";
import { IOrder } from "../../../../core/domain/entities/IOrder.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Order } from "../../../data/Order.model";

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order> = AppDataSource.getRepository(Order);

  save(order: IOrder): void {
    throw new Error("Method not implemented.");
  }
}

export { OrderRepository };

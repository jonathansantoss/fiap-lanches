import { IOrderRepository } from "../../../../core/applications/ports/out/order/IOrder.repository";
import { IOrder } from "../../../../core/domain/entities/IOrder.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../config/DataSource";
import { Order } from "../../../data/Order.model";
import { logger } from '../../../../config/WinstonLog';

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order> = AppDataSource.getRepository(Order);

  async save(order: IOrder): Promise<string> {
    const orderCreated = this.repository.create(order)
    return await this.repository.save(orderCreated).then(resp => {
      return resp.id
    }).catch(error => {
      const message = `Error on creating order in database`
      logger.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }
}

export { OrderRepository };

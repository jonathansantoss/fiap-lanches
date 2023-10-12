import { IOrderRepository } from "../../../../core/applications/ports/out/order/IOrder.repository";
import { IOrder } from "../../../../core/domain/entities/IOrder.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../config/DataSource";
import { Order } from "../../../data/Order.model";
import { logger } from '../../../../config/WinstonLog';

class OrderRepository implements IOrderRepository {
  private repository: Repository<Order> = AppDataSource.getRepository(Order);

  async saveOrUpdate(order: IOrder): Promise<string> {
    const orderCreated = order.id ? order : this.repository.create(order)
    return await this.repository.save(orderCreated).then(resp => {
      return resp.id
    }).catch(error => {
      const message = `Error on ${order.id ? 'updation' : 'creating'} order in database`
      logger.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }


  async getById(id: string): Promise<IOrder> {
    return await this.repository.findOne({
      where: {
        id,
      },
    }).then(resp => {
      return resp
    }).catch(error => {
      const message = "Error getting order from database"
      logger.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }
}

export { OrderRepository };

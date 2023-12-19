import { IOrderRepository } from "../interfaces/IOrderRepository";
import { IOrder } from "../../domain/models/IOrderModel";
import { Order } from "../entity/OrderEntity";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { AppDataSource } from "../../configurations/DataSource";
import { logger } from "../../configurations/WinstonLog";
import { Repository } from "typeorm";

class OrderRepository implements IOrderRepository {

  private repository: Repository<Order> = AppDataSource.getRepository(Order);

  async saveOrUpdate(order: IOrder): Promise<string> {
    const orderCreated = order.id ? order : this.repository.create(order);
    return await this.repository
      .save(orderCreated)
      .then((resp) => {
        return resp.id;
      })
      .catch((error) => {
        const message = `Error on ${order.id ? "updation" : "creating"
          } order in database`;
        logger.error(`${message}: ${error.message}`);
        throw new Error(message);
      });
  }

  async getById(id: string): Promise<IOrder> {

    // const orderRedis = await redis.get("orderId:" + id);
    // if (orderRedis !== null) {
    //   return Promise.resolve(JSON.parse(orderRedis)) as Promise<IOrder>;
    // }

    return await this.repository
      .findOne({
        where: {
          id,
        },
      })
      .then(async (resp) => {
        if (!resp?.id) {
          return resp;
        }
        // await redis.set("orderId:" + resp.id, JSON.stringify(resp));
        // await redis.expire("orderId:" + resp.id, 1000);
        return resp;
      })
      .catch((error) => {
        const message = "Error getting order from database";
        logger.error(`${message}: ${error.message}`);
        throw new Error(message);
      });
  }

  async getByStatus(status: EOrderStatus): Promise<IOrder[]> {
    // const orderRedis = await redis.get("orderStatus:" + status);

    // if (orderRedis) {
    //   return Promise.resolve(JSON.parse(orderRedis)) as Promise<IOrder[]>;
    // }

    return await this.repository
      .find({
        where: {
          status,
        },
      })
      .then(async (resp) => {
        // await redis.set("orderStatus:" + status, JSON.stringify(resp));
        // await redis.expire("orderStatus:" + status, 1000);
        return resp;
      })
      .catch((error) => {
        const message = "Error getting order from database";
        logger.error(`${message}: ${error.message}`);
        throw new Error(message);
      });
  }
}

export { OrderRepository };

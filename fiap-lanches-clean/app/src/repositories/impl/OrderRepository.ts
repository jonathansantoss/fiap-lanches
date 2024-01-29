import { IOrderRepository } from "../interfaces/IOrderRepository";
import { IOrder } from "../../domain/models/IOrderModel";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { logger } from "../../configurations/WinstonLog";
import { Repository, Not } from "typeorm";
import { IDataSource } from "../dataSource/IDataSource";

class OrderRepository implements IOrderRepository {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  async saveOrUpdate(order: IOrder): Promise<string> {
    return await this.dataSource.save(order).then((resp) => {
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

    return await this.dataSource
      .findOne(id)
      .then(async (resp) => {
        if (!resp?.id) {
          return resp;
        }
        return resp;
      })
      .catch((error) => {
        const message = "Error getting order from database";
        logger.error(`${message}: ${error.message}`);
        throw new Error(message);
      });
  }

  async getByStatus(status: EOrderStatus): Promise<IOrder[]> {

    return await this.dataSource
      .findBy("status", status, null)
      .then(async (resp) => {
        return resp;
      })
      .catch((error) => {
        const message = "Error getting order from database";
        logger.error(`${message}: ${error.message}`);
        throw new Error(message);
      });
  }

  async getAllUnfinishedOrders(): Promise<IOrder[]> {
    let order = {
      status: 'ASC',
      startedAt: 'ASC'
    }

    return await this.dataSource.findBy("status", Not(EOrderStatus.FINISHED), order).then(async (resp) => {
      return resp;
    })
      .catch((error) => {
        const message = "Error getting orders from database";
        logger.error(`${message}: ${error.message}`);
        throw new Error(`${message}: ${error.message}`);
      });

  }
}

export { OrderRepository };

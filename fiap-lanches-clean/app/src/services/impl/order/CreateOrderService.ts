import { injectable, inject } from "tsyringe";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { ICreateOrderService } from "../../interfaces/order/ICreateOrderService";
import { IGetProductByIdsService } from "../../interfaces/product/IGetProductByIdsService";
import { IFindClientByCpfService } from "../../interfaces/client/IFindClientByCpfService";

@injectable()
class CreateOrderService implements ICreateOrderService {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository, 
    @inject("GetProductByIdsService") private getProducts: IGetProductByIdsService,
    @inject("FindClientByCpfService") private findClient: IFindClientByCpfService
  ) { }

  async execute(order): Promise<string> {
    const client = order.clientCpf ? await this.findClient.execute(order.clientCpf).then(resp => resp) : null

    const order_created = {
      value: order.value,
      products: await this.getProducts.execute(order.productsIds).then(resp => resp),
      startedAt: new Date(),
      deliveredAt: null,
      status: EOrderStatus.RECEIVED,
      client: client
    } as IOrder

    return this.orderRepository.saveOrUpdate(order_created);
  }
}

export { CreateOrderService };

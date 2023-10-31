import { injectable, inject } from "tsyringe";
import { IOrder } from "../../../domain/entities/IOrder.entity";
import { ICreateOrderUseCase } from "../../ports/in/order/ICreateOrderUseCase";
import { IOrderRepository } from "../../ports/out/order/IOrder.repository";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IGetProductByIdsUseCase } from "../../ports/in/product/IGetProductByIdsUseCase";
import { IFindClientByCpfUseCase } from "../../ports/in/client/IFindClientByCpfUseCase";

@injectable()
class CreateOrderUseCase implements ICreateOrderUseCase {
  constructor(
    @inject("OrderRepository") private orderRepository: IOrderRepository, 
    @inject("GetProductByIdsUseCase") private getProducts: IGetProductByIdsUseCase,
    @inject("FindClientByCpfUseCase") private findClient: IFindClientByCpfUseCase
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

export { CreateOrderUseCase };

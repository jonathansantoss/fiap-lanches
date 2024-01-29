import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface IGetOrderByIdUseCase {
  execute(orderId: string): Promise<IOrder>;
}

export { IGetOrderByIdUseCase };

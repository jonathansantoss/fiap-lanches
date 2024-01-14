import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface ICreateOrderUseCase {
  execute(order: IOrder): Promise<string>;
}

export { ICreateOrderUseCase };

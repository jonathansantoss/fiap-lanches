import { IOrder } from "../../../../domain/entities/IOrder.entity";

interface ICreateOrderUseCase {
  execute(order: IOrder): void;
}

export { ICreateOrderUseCase };

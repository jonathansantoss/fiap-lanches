import { IOrder } from "../../../../domain/entities/IOrder.entity";
import { EOrderStatus } from "../../../../domain/enums/EOrderStatus";

interface IGetOrderByStatusUseCase {
  execute(status: EOrderStatus): Promise<IOrder[]>;
}

export { IGetOrderByStatusUseCase };

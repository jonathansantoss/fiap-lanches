import { EOrderStatus } from "../../../../domain/enums/EOrderStatus";

interface IUpdateOrderStatusUseCase {
  execute(orderId: string, orderStatus: EOrderStatus): Promise<string>;
}

export { IUpdateOrderStatusUseCase };

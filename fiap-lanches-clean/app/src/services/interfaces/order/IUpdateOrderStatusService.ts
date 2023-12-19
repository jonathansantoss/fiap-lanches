import { EOrderStatus } from "../../../domain/enums/EOrderStatus";

interface IUpdateOrderStatusService {
  execute(orderId: string, orderStatus: EOrderStatus): Promise<string>;
}

export { IUpdateOrderStatusService };

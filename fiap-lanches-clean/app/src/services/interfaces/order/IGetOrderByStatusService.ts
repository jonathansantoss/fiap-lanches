import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IOrder } from "../../../domain/models/IOrderModel";
interface IGetOrderByStatusService {
  execute(status: EOrderStatus): Promise<IOrder[]>;
}

export { IGetOrderByStatusService };

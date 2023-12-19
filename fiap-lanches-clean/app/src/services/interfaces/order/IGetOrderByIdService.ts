import { IOrder } from "../../../domain/models/IOrderModel";

interface IGetOrderByIdService {
  execute(orderId: string): Promise<IOrder>;
}

export { IGetOrderByIdService };

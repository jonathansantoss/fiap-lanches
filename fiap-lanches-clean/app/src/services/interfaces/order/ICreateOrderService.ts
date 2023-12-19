import { IOrder } from "../../../domain/models/IOrderModel";

interface ICreateOrderService {
  execute(order: IOrder): Promise<string>;
}

export { ICreateOrderService };

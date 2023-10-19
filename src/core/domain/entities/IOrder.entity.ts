import { EOrderStatus } from "../enums/EOrderStatus";
import { EOrderPayment } from "../enums/EPayment";
import { IClient } from "./IClient.entity";
import { IProduct } from "./IProduct.entity";

interface IOrder {
  id?: string;
  value: number;
  products: IProduct[];
  startedAt: Date;
  deliveredAt: Date;
  status: EOrderStatus;
  payment?: EOrderPayment;
  client: IClient;
}

export { IOrder };

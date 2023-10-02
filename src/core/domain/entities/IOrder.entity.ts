import { EOrderStatus } from "../enums/EOrderStatus";
import { IProduct } from "./IProduct.entity";

interface IOrder {
  id: string;
  value: number;
  products: IProduct[];
  startedAt: Date;
  deliveredAt: Date;
  status: EOrderStatus;
  //client: Client;
}

export { IOrder };

import { IOrder } from "./IOrder.entity";

interface IProduct {
  id: string;
  name: string;
  value: number;
  amount: number;
  orders: IOrder[];
}

export { IProduct }
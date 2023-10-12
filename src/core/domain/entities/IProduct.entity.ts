import { EProductCategory } from "../enums/EProductCategory";
import { IOrder } from "./IOrder.entity";

interface IProduct {
  id?: string;
  name: string;
  value: number;
  amount: number;
  orders: IOrder[];
  createdAt: Date;
  updatedAt: Date;
  category: EProductCategory;
}

export { IProduct }
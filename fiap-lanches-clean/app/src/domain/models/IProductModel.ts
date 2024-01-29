
import { EProductCategory } from "../enums/EProductCategory";
import { IOrder } from "./IOrderModel";
import { IPromotion } from "./IPromotionModel";

interface IProduct {
  id?: string;
  name: string;
  value: number;
  promotionValue: number;
  amount: number;
  promotions: IPromotion[];
  orders: IOrder[];
  createdAt: Date;
  updatedAt: Date;
  category: EProductCategory;
}

export { IProduct }

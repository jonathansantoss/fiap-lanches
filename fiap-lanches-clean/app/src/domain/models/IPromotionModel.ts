
import { EPromotionStatus } from "../enums/EPromotionStatus";
import { IProduct } from "./IProductModel";

interface IPromotion {
  id?: string;
  product: IProduct;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  updatedAt: Date;
  status: EPromotionStatus;
  promotionValue: number;
}

export { IPromotion }

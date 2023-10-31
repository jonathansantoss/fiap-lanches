
import { EPromotionStatus } from "../enums/EPromotionStatus";
import { IProduct } from "./IProduct.entity";

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


import { Promotion } from "../../../../../adapter/data/Promotion.model";
import { IPromotion } from "../../../../domain/entities/IPromotion";

interface IPromotionRepository {
  saveOrUpdate(promotion: IPromotion): Promise<string>;
  getActivePromotionByProductId(productId: string): Promise<Promotion[]>;
}

export { IPromotionRepository };
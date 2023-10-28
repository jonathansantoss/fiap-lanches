
import { IPromotion } from "../../../../domain/entities/IPromotion";

interface IPromotionRepository {
  saveOrUpdate(promotion: IPromotion): Promise<string>;
  getActivePromotionByProductId(productId: string): Promise<IPromotion[]>;
  getPromotionById(productId: string): Promise<IPromotion>;
}

export { IPromotionRepository };
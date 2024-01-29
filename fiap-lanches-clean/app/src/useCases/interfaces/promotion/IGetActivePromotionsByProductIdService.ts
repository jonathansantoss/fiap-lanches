import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";

interface IGetActivePromotionsByProductIdService {
    execute(productId: string, promotionRepository: IPromotionRepository): Promise<IPromotion[]>;
}

export { IGetActivePromotionsByProductIdService };

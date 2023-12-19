import { IPromotion } from "../../../domain/models/IPromotionModel";

interface IGetActivePromotionsByProductIdService {
    execute(productId: string): Promise<IPromotion[]>;
}

export { IGetActivePromotionsByProductIdService };

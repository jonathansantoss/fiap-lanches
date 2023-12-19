import { IPromotion } from "../../../domain/models/IPromotionModel";

interface ICreateOrUpdatePromotionService {
    execute(promotion: IPromotion): Promise<string>;
}

export { ICreateOrUpdatePromotionService };
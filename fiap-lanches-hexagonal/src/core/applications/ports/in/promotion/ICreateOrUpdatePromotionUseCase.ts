import { IPromotion } from "../../../../domain/entities/IPromotion";

interface ICreateOrUpdatePromotionUseCase {
    execute(promotion: IPromotion): Promise<string>;
}

export { ICreateOrUpdatePromotionUseCase };
import { IPromotion } from "../../../../domain/entities/IPromotion";

interface IGetActivePromotionsByProductIdUseCase {
    execute(productId: string): Promise<IPromotion[]>;
}

export { IGetActivePromotionsByProductIdUseCase };

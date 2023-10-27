import { Promotion } from "../../../../../adapter/data/Promotion.model";

interface IGetActivePromotionsByProductIdUseCase {
    execute(productId: string): Promise<Promotion[]>;
}

export { IGetActivePromotionsByProductIdUseCase };

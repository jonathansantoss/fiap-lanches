import { IPromotion } from "../../../../domain/entities/IPromotion";

interface IGetPromotionByIdUseCase {
    execute(id: string): Promise<IPromotion>;
}

export { IGetPromotionByIdUseCase };
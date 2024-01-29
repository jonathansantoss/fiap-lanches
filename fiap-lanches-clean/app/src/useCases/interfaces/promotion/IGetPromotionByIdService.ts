import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";

interface IGetPromotionByIdService {
    execute(id: string, promotionRepository: IPromotionRepository): Promise<IPromotion>;
}

export { IGetPromotionByIdService };
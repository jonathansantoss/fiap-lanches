
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import {
    IGetActivePromotionsByProductIdService
} from "../../interfaces/promotion/IGetActivePromotionsByProductIdService";

class GetActivePromotionsByProductIdService implements IGetActivePromotionsByProductIdService {


    execute(product: string, promotionRepository: IPromotionRepository): Promise<IPromotion[]> {
        return promotionRepository.getActivePromotionByProductId(product);
    }

}
export { GetActivePromotionsByProductIdService };


import { injectable, inject } from "tsyringe";
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { IGetPromotionByIdService } from "../../interfaces/promotion/IGetPromotionByIdService";

class GetPromotionByIdService implements IGetPromotionByIdService {


    execute(product: string, promotionRepository: IPromotionRepository): Promise<IPromotion> {
        return promotionRepository.getPromotionById(product);
    }

}
export { GetPromotionByIdService };

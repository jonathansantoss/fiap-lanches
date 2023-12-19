
import { injectable, inject } from "tsyringe";
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import {
    IGetActivePromotionsByProductIdService
} from "../../interfaces/promotion/IGetActivePromotionsByProductIdService";

@injectable()
class GetActivePromotionsByProductIdService implements IGetActivePromotionsByProductIdService {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository
    ) { }

    execute(product: string): Promise<IPromotion[]> {
        return this.promotionRepository.getActivePromotionByProductId(product);
    }

}
export { GetActivePromotionsByProductIdService };

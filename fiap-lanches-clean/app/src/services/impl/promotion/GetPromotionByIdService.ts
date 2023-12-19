
import { injectable, inject } from "tsyringe";
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { IGetPromotionByIdService } from "../../interfaces/promotion/IGetPromotionByIdService";

@injectable()
class GetPromotionByIdService implements IGetPromotionByIdService {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository
    ) { }

    execute(product: string): Promise<IPromotion> {
        return this.promotionRepository.getPromotionById(product);
    }

}
export { GetPromotionByIdService };

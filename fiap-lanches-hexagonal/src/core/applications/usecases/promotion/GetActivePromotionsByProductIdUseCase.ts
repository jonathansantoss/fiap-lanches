
import { injectable, inject } from "tsyringe";
import { IPromotionRepository } from "../../ports/out/promotion/IPromotion.repository";
import { IGetActivePromotionsByProductIdUseCase } from "../../ports/in/promotion/IGetActivePromotionsByProductIdUseCase";
import { IPromotion } from "../../../domain/entities/IPromotion";

@injectable()
class GetActivePromotionsByProductIdUseCase implements IGetActivePromotionsByProductIdUseCase {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository
    ) { }

    execute(product: string): Promise<IPromotion[]> {
        return this.promotionRepository.getActivePromotionByProductId(product);
    }

}
export { GetActivePromotionsByProductIdUseCase };

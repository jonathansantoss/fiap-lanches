
import { injectable, inject } from "tsyringe";
import { IPromotionRepository } from "../../ports/out/promotion/IPromotion.repository";
import { Promotion } from "../../../../adapter/data/Promotion.model";
import { IGetActivePromotionsByProductIdUseCase } from "../../ports/in/promotion/IGetActivePromotionsByProductIdUseCase";

@injectable()
class GetActivePromotionsByProductIdUseCase implements IGetActivePromotionsByProductIdUseCase {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository
    ) { }

    execute(product: string): Promise<Promotion[]> {
        return this.promotionRepository.getActivePromotionByProductId(product);
    }

}
export { GetActivePromotionsByProductIdUseCase };

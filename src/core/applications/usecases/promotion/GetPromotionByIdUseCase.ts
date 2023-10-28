
import { injectable, inject } from "tsyringe";
import { IPromotionRepository } from "../../ports/out/promotion/IPromotion.repository";
import { IPromotion } from "../../../domain/entities/IPromotion";
import { IGetPromotionByIdUseCase } from "../../ports/in/promotion/IGetPromotionByIdUseCase";

@injectable()
class GetPromotionByIdUseCase implements IGetPromotionByIdUseCase {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository
    ) { }

    execute(product: string): Promise<IPromotion> {
        return this.promotionRepository.getPromotionById(product);
    }

}
export { GetPromotionByIdUseCase };


import { injectable, inject } from "tsyringe";
import { IPromotionRepository } from "../../ports/out/promotion/IPromotion.repository";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { ICancelPromotionUseCase } from "../../ports/in/promotion/ICancelPromotionUseCase";
import { IGetPromotionByIdUseCase } from "../../ports/in/promotion/IGetPromotionByIdUseCase";
import { ICreateOrUpdatePromotionUseCase } from "../../ports/in/promotion/ICreateOrUpdatePromotionUseCase";

@injectable()
class CancelPromotionUseCase implements ICancelPromotionUseCase {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository,
        @inject("GetPromotionByIdUseCase") private getPromotionById: IGetPromotionByIdUseCase,
        @inject("CreateOrUpdatePromotionUseCase") private createOrUpdatePromotion: ICreateOrUpdatePromotionUseCase
    ) { }

    async execute(id: string): Promise<void> {
        const promotion = await this.getPromotionById.execute(id).then(resp => resp);

        if (!promotion) {
            throw new CustomError("Promotion not found", 404)
        }

        promotion.status = EPromotionStatus.CANCELLED
        promotion.updatedAt = new Date()

        await this.createOrUpdatePromotion.execute(promotion)
    }

}
export { CancelPromotionUseCase };

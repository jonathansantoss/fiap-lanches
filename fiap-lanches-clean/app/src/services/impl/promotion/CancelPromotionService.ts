
import { injectable, inject } from "tsyringe";
import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICancelPromotionService } from "../../interfaces/promotion/ICancelPromotionService";
import { IGetPromotionByIdService } from "../../interfaces/promotion/IGetPromotionByIdService";
import { ICreateOrUpdatePromotionService } from "../../interfaces/promotion/ICreateOrUpdatePromotionService";
import { CustomError } from "../../exceptions/Exceptions";

@injectable()
class CancelPromotionService implements ICancelPromotionService {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository,
        @inject("GetPromotionByIdService") private getPromotionById: IGetPromotionByIdService,
        @inject("CreateOrUpdatePromotionService") private createOrUpdatePromotion: ICreateOrUpdatePromotionService
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
export { CancelPromotionService };

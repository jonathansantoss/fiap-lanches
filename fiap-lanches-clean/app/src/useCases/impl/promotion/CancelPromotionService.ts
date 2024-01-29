
import { injectable, inject } from "tsyringe";
import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICancelPromotionService } from "../../interfaces/promotion/ICancelPromotionService";
import { IGetPromotionByIdService } from "../../interfaces/promotion/IGetPromotionByIdService";
import { ICreateOrUpdatePromotionService } from "../../interfaces/promotion/ICreateOrUpdatePromotionService";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";
import { IGetActivePromotionsByProductIdService } from "../../interfaces/promotion/IGetActivePromotionsByProductIdService";

class CancelPromotionService implements ICancelPromotionService {

    async execute(
        id: string,
        promotionRepository: IPromotionRepository,
        getPromotionById: IGetPromotionByIdService,
        createOrUpdatePromotion: ICreateOrUpdatePromotionService,
        getActivePromotionsByProductIdService: IGetActivePromotionsByProductIdService,
        createOrUpdateProductService: ICreateOrUpdateProductService,
        productRepository: IProductRepository,
        getProductById: IGetProductByIdService): Promise<void> {

        const promotion = await getPromotionById.execute(id, promotionRepository).then(resp => resp);

        if (!promotion) {
            throw new CustomError("Promotion not found", 404)
        }

        promotion.status = EPromotionStatus.CANCELLED
        promotion.updatedAt = new Date()

        await createOrUpdatePromotion.execute(promotion, promotionRepository, getActivePromotionsByProductIdService, createOrUpdateProductService, productRepository, getProductById)
    }

}
export { CancelPromotionService };

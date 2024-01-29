import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICreateOrUpdateProductService } from "../product/ICreateOrUpdateProductService";
import { IGetProductByIdService } from "../product/IGetProductByIdService";
import { IGetActivePromotionsByProductIdService } from "./IGetActivePromotionsByProductIdService";

interface ICreateOrUpdatePromotionService {
    execute(promotion: IPromotion,
        promotionRepository: IPromotionRepository,
        getActivePromotionsByProductIdService: IGetActivePromotionsByProductIdService,
        createOrUpdateProductService: ICreateOrUpdateProductService,
        productRepository: IProductRepository,
        getProductById: IGetProductByIdService): Promise<string>;
}

export { ICreateOrUpdatePromotionService };
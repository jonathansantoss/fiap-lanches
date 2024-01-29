import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICreateOrUpdateProductService } from "../product/ICreateOrUpdateProductService";
import { IGetProductByIdService } from "../product/IGetProductByIdService";
import { ICreateOrUpdatePromotionService } from "./ICreateOrUpdatePromotionService";
import { IGetActivePromotionsByProductIdService } from "./IGetActivePromotionsByProductIdService";
import { IGetPromotionByIdService } from "./IGetPromotionByIdService";

interface ICancelPromotionService {
    execute(id: string,
        promotionRepository: IPromotionRepository,
        getPromotionById: IGetPromotionByIdService,
        createOrUpdatePromotion: ICreateOrUpdatePromotionService,
        getActivePromotionsByProductIdService: IGetActivePromotionsByProductIdService,
        createOrUpdateProductService: ICreateOrUpdateProductService,
        productRepository: IProductRepository,
        getProductById: IGetProductByIdService): Promise<void>;
}

export { ICancelPromotionService };
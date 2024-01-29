import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICreateOrUpdatePromotionService } from "../../interfaces/promotion/ICreateOrUpdatePromotionService";
import {
    IGetActivePromotionsByProductIdService
} from "../../interfaces/promotion/IGetActivePromotionsByProductIdService";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { ProductRepository } from "../../../repositories/impl/ProductRepository";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
const { v4: uuidv4 } = require('uuid');

class CreateOrUpdatePromotionService implements ICreateOrUpdatePromotionService {



    async execute(
        promotion,
        promotionRepository: IPromotionRepository,
        getActivePromotionsByProductIdService: IGetActivePromotionsByProductIdService,
        createOrUpdateProductService: ICreateOrUpdateProductService,
        productRepository: IProductRepository,
        getProductById: IGetProductByIdService): Promise<string> {
            
        const promotions = await getActivePromotionsByProductIdService.execute(promotion.productId, promotionRepository).then(resp => resp);
    
        if (promotions.length > 0 && !promotion.id) {
            throw new CustomError("Product with promotion active", 409)
        }

        const product = await getProductById.execute(promotion.productId, productRepository).then(resp => resp);

        if (!product) {
            throw new CustomError("Product not found", 404)
        }

        product.promotionValue = promotion.promotionValue

        console.log(promotion)
        if (promotion.status && promotion.status == EPromotionStatus.CANCELLED) {
            product.promotionValue = null
        }

        product.updatedAt = new Date()

        const newPromotion: IPromotion = {
            id: promotion.id ? promotion.id : uuidv4(),
            product: product,
            startAt: promotion.startAt,
            endAt: promotion.endAt,
            createdAt: promotion.id ? promotion.createdAt : new Date(),
            updatedAt: promotion.id ? new Date() : null,
            status: promotion.id ? promotion.status : EPromotionStatus.ACTIVE,
            promotionValue: promotion.promotionValue
        }

        await createOrUpdateProductService.execute(product, productRepository)
        return promotionRepository.saveOrUpdate(newPromotion);
    }
}

export { CreateOrUpdatePromotionService };
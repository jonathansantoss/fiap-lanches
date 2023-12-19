import { injectable, inject } from "tsyringe";
import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { IPromotion } from "../../../domain/models/IPromotionModel";
import { IPromotionRepository } from "../../../repositories/interfaces/IPromotionRepository";
import { ICreateOrUpdatePromotionService } from "../../interfaces/promotion/ICreateOrUpdatePromotionService";
import { 
    IGetActivePromotionsByProductIdService 
} from "../../interfaces/promotion/IGetActivePromotionsByProductIdService";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";
import { CustomError } from "../../exceptions/Exceptions";
const { v4: uuidv4 } = require('uuid');

@injectable()
class CreateOrUpdatePromotionService implements ICreateOrUpdatePromotionService {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository,
        @inject("GetActivePromotionsByProductIdService") private getActivePromotionsByProductIdService: IGetActivePromotionsByProductIdService,
        @inject("CreateOrUpdateProductService") private createOrUpdateProductService: ICreateOrUpdateProductService,
        @inject("GetProductByIdService") private getProductById: IGetProductByIdService
    ) { 
    }
    

    async execute(promotion): Promise<string> {
        const promotions = await this.getActivePromotionsByProductIdService.execute(promotion.productId).then(resp => resp);
        if (promotions.length > 0 && !promotion.id) {
            throw new CustomError("Product with promotion active", 409)
        }

        const product = await this.getProductById.execute(promotion.productId).then(resp => resp);

        if (!product) {
            throw new CustomError("Product not found", 404)
        }

        product.promotionValue = promotion.promotionValue

        console.log(promotion)
        if(promotion.status && promotion.status == EPromotionStatus.CANCELLED) {
            product.promotionValue = null
        }
        
        product.updatedAt = new Date()

        const newPromotion: IPromotion = {
            id: promotion.id ? promotion.id : uuidv4(),
            product: product,
            startAt: promotion.startAt,
            endAt: promotion.endAt,
            createdAt: promotion.id ? promotion.createdAt : new Date(),
            updatedAt:  promotion.id ? new Date() : null,
            status: promotion.id ? promotion.status : EPromotionStatus.ACTIVE,
            promotionValue: promotion.promotionValue
        }

        console.log(product)
        await this.createOrUpdateProductService.execute(product)
        return this.promotionRepository.saveOrUpdate(newPromotion);
    }
}

export { CreateOrUpdatePromotionService };
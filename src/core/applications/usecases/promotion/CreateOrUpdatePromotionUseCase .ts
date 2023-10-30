import { injectable, inject } from "tsyringe";
import { ICreateOrUpdatePromotionUseCase } from "../../ports/in/promotion/ICreateOrUpdatePromotionUseCase";
import { IPromotion } from "../../../domain/entities/IPromotion";
import { EPromotionStatus } from "../../../domain/enums/EPromotionStatus";
import { IPromotionRepository } from "../../ports/out/promotion/IPromotion.repository";
import { IGetActivePromotionsByProductIdUseCase } from "../../ports/in/promotion/IGetActivePromotionsByProductIdUseCase";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { IGetProductByIdUseCase } from "../../ports/in/product/IGetProductByIdUseCase";
import { ICreateOrUpdateProductUseCase } from "../../ports/in/product/ICreateOrUpdateProductUseCase";
const { v4: uuidv4 } = require('uuid');

@injectable()
class CreateOrUpdatePromotionUseCase implements ICreateOrUpdatePromotionUseCase {
    constructor(
        @inject("PromotionRepository") private promotionRepository: IPromotionRepository,
        @inject("GetActivePromotionsByProductIdUseCase") private getActivePromotionsByProductIdUseCase: IGetActivePromotionsByProductIdUseCase,
        @inject("CreateOrUpdateProductUseCase") private createOrUpdateProductUseCase: ICreateOrUpdateProductUseCase,
        @inject("GetProductByIdUseCase") private getProductById: IGetProductByIdUseCase
    ) { 
    }
    

    async execute(promotion): Promise<string> {
        const promotions = await this.getActivePromotionsByProductIdUseCase.execute(promotion.productId).then(resp => resp);
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
        await this.createOrUpdateProductUseCase.execute(product)
        return this.promotionRepository.saveOrUpdate(newPromotion);
    }
}

export { CreateOrUpdatePromotionUseCase };
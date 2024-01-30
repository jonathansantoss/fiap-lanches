
import { In, Repository } from "typeorm";
import { AppDataSource } from "../../../../config/DataSource";
import { IPromotionRepository } from "../../../../core/applications/ports/out/promotion/IPromotion.repository";
import { IPromotion } from "../../../../core/domain/entities/IPromotion";
import { Promotion } from "../../../data/Promotion.model";
import { EPromotionStatus } from "../../../../core/domain/enums/EPromotionStatus";

class PromotionRepository implements IPromotionRepository {

    private repository: Repository<Promotion> = AppDataSource.getRepository(Promotion);

    async saveOrUpdate(promotion): Promise<string> {
        const promotionCreated = !promotion.id ? this.repository.create(promotion) : promotion;
        return await this.repository.save(promotionCreated).then(resp => {
            return resp.id
        }).catch(error => {
            const message = `Error on ${promotion.id ? "updating" : "creating"} promotion in database`
            throw new Error(message)
        });
    }

    async getActivePromotionByProductId(productId: string): Promise<Promotion[]> {
        return await this.repository.find({ where: { product: { id: productId }, status: EPromotionStatus.ACTIVE } }).then(resp => {
            return resp
        }).catch(error => {
            const message = `Error on getting product id: ${productId} from promotion in database`
            throw new Error(message)
        });
    }

    async getPromotionById(id: string): Promise<Promotion> {
        return await this.repository.findOne({
            where: {
                id,
            },
        }).then(resp => {
            return resp
        }).catch(error => {
            const message = `Error on getting ${id} promotion in database`
            throw new Error(message)
        });
    }
}


export { PromotionRepository };

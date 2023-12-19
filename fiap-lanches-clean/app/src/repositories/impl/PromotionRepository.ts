import { IPromotionRepository } from "../interfaces/IPromotionRepository";
import { IPromotion } from "../../domain/models/IPromotionModel";
import { Promotion } from "../entity/PromotionEntity";
import { EPromotionStatus } from "../../domain/enums/EPromotionStatus";
import { AppDataSource } from "../../configurations/DataSource";
import { logger } from "../../configurations/WinstonLog";
import { Repository } from "typeorm";

class PromotionRepository implements IPromotionRepository {

    private repository: Repository<Promotion> = AppDataSource.getRepository(Promotion);

    async saveOrUpdate(promotion: IPromotion): Promise<string> {
        const promotionCreated = !promotion.id ? this.repository.create(promotion) : promotion;
        return await this.repository.save(promotionCreated).then(resp => {
            return resp.id
        }).catch(error => {
            const message = `Error on ${promotion.id ? "updating" : "creating"} promotion in database`
            logger.error(`${message}: ${error.message}`)
            throw new Error(message)
        });
    }

    async getActivePromotionByProductId(productId: string): Promise<Promotion[]> {
        return await this.repository.find({ where: { product: { id: productId }, status: EPromotionStatus.ACTIVE } }).then(resp => {
            return resp
        }).catch(error => {
            const message = `Error on getting product id: ${productId} from promotion in database`
            logger.error(`${message}: ${error.message}`)
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
            logger.error(`${message}: ${error.message}`)
            throw new Error(message)
        });
    }
}


export { PromotionRepository };

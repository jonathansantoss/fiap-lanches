
import { In, Repository } from "typeorm";
import { AppDataSource } from "../../../../config/DataSource";
import { logger } from '../../../../config/WinstonLog';
import { IPromotionRepository } from "../../../../core/applications/ports/out/promotion/IPromotion.repository";
import { IPromotion } from "../../../../core/domain/entities/IPromotion";
import { Promotion } from "../../../data/Promotion.model";
import { EPromotionStatus } from "../../../../core/domain/enums/EPromotionStatus";

class PromotionRepository implements IPromotionRepository {

    private repository: Repository<Promotion> = AppDataSource.getRepository(Promotion);

    async saveOrUpdate(promotion): Promise<string> {
        const promotionCreated = !promotion.id ? this.repository.create(promotion) : promotion;
        console.log(promotionCreated)
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
          const message = `Error on getting ${productId} promotion in database`
          logger.error(`${message}: ${error.message}`)
          throw new Error(message)
        });
    }
}


export { PromotionRepository };

import { IPromotionRepository } from "../interfaces/IPromotionRepository";
import { IPromotion } from "../../domain/models/IPromotionModel";
import { EPromotionStatus } from "../../domain/enums/EPromotionStatus";
import { AppDataSource } from "../../configurations/DataSource";
import { logger } from "../../configurations/WinstonLog";
import { Repository } from "typeorm";
import { Promotion } from "../../configurations/DataSourceModelation/PromotionEntityConfig";
import { IDataSource } from "../dataSource/IDataSource";

class PromotionRepository implements IPromotionRepository {

    private dataSource: IDataSource;

    constructor(dataSource: IDataSource) {
        this.dataSource = dataSource;
    }

    async saveOrUpdate(promotion: IPromotion): Promise<string> {
        return await this.dataSource.save(promotion).then(resp => {
            return resp.id
        }).catch(error => {
            const message = `Error on ${promotion.id ? "updating" : "creating"} promotion in database`
            logger.error(`${message}: ${error.message}`)
            throw new Error(message)
        });
    }

    async getActivePromotionByProductId(productId: string): Promise<Promotion[]> {
        return await this.dataSource.findByFields([{ field: "product", value: { id: productId } }, { field: "status", value: EPromotionStatus.ACTIVE }], null).then(resp => {
            return resp
        }).catch(error => {
            const message = `Error on getting product id: ${productId} from promotion in database`
            logger.error(`${message}: ${error.message}`)
            throw new Error(message)
        });
    }

    async getPromotionById(id: string): Promise<Promotion> {
        return await this.dataSource.findOne(id).then(resp => {
            return resp
        }).catch(error => {
            const message = `Error on getting ${id} promotion in database`
            logger.error(`${message}: ${error.message}`)
            throw new Error(message)
        });
    }
}


export { PromotionRepository };

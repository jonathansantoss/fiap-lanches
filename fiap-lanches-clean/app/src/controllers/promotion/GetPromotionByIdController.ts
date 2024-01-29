
import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { GetPromotionByIdService } from "../../useCases/impl/promotion/GetPromotionByIdService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { PromotionRepository } from "../../repositories/impl/PromotionRepository";

class GetPromotionByidController {
    public dataSource: IDataSource;

    constructor(dataSource: IDataSource) {
        this.dataSource = dataSource;
    }

    handler = async (request: Request, response: Response) => {
        const getPromotionById = new GetPromotionByIdService();
        const promotionRepository = new PromotionRepository(this.dataSource)

        getPromotionById.execute(request.params.id, promotionRepository).then(resp => {
            response.status(200).send({ "message": 'Promotion found', "id": resp })
        }).catch(error => {
            logger.error(`Get promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPromotionByidController };

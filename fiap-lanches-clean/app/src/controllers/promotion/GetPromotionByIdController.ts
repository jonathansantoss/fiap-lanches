
import { Request, Response } from "express";
import { GetPromotionByIdService } from "../../useCases/impl/promotion/GetPromotionByIdService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { PromotionRepository } from "../../repositories/impl/PromotionRepository";
import { ILogger } from "../../configurations/Logger/ILogger";

class GetPromotionByidController {
    public dataSource: IDataSource;
    public logger: ILogger;

    constructor(dataSource: IDataSource, logger: ILogger) {
        this.dataSource = dataSource;
        this.logger = logger;
    }

    handler = async (request: Request, response: Response) => {
        const getPromotionById = new GetPromotionByIdService();
        const promotionRepository = new PromotionRepository(this.dataSource)

        getPromotionById.execute(request.params.id, promotionRepository).then(resp => {
            response.status(200).send({ "message": 'Promotion found', "id": resp })
        }).catch(error => {
            this.logger.error(`Get promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPromotionByidController };

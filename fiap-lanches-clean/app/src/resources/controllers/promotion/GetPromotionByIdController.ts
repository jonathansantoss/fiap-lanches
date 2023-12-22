
import { Request, Response } from "express";
import { IGetPromotionByIdService } from "../../../services/interfaces/promotion/IGetPromotionByIdService";
import { GetPromotionByIdService } from "../../../services/impl/promotion/GetPromotionByIdService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class GetPromotionByidController {
    handler(request: Request, response: Response) {

        const getPromotionById: IGetPromotionByIdService =
            container.resolve<IGetPromotionByIdService>(GetPromotionByIdService);
        
        getPromotionById.execute(request.params.id).then(resp => {
            response.status(200).send({ "message": 'Promotion found', "id": resp })
        }).catch(error => {
            logger.error(`Get promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPromotionByidController };

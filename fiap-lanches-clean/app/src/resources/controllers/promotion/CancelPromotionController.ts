
import { Request, Response } from "express";
import { ICancelPromotionService } from "../../../services/interfaces/promotion/ICancelPromotionService";
import { CancelPromotionService } from "../../../services/impl/promotion/CancelPromotionService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class CancelPromotionController {
    handler(request: Request, response: Response) {

        const cancelPromotionService: ICancelPromotionService =
            container.resolve<ICancelPromotionService>(CancelPromotionService);
        
        cancelPromotionService.execute(request.params.id).then(resp => {
            response.status(200).send({ "message": 'Promotion cancelled' })
        }).catch(error => {
            logger.error(`Delete promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CancelPromotionController };

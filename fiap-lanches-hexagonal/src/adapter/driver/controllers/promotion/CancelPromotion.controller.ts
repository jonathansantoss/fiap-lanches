
import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { logger } from '../../../../config/WinstonLog';
import { ICancelPromotionUseCase } from "../../../../core/applications/ports/in/promotion/ICancelPromotionUseCase";
import { CancelPromotionUseCase } from "../../../../core/applications/usecases/promotion/CancelPromotionUseCase";

class CancelPromotionController {
    handler(request: Request, response: Response) {

        const cancelPromotionUseCase: ICancelPromotionUseCase =
            container.resolve<ICancelPromotionUseCase>(CancelPromotionUseCase);
        
        cancelPromotionUseCase.execute(request.params.id).then(resp => {
            response.status(200).send({ "message": 'Promotion cancelled' })
        }).catch(error => {
            logger.error(`Delete promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CancelPromotionController };

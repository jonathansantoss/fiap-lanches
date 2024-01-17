
import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { logger } from '../../../../config/WinstonLog';
import { IGetPromotionByIdUseCase } from "../../../../core/applications/ports/in/promotion/IGetPromotionByIdUseCase";
import { GetPromotionByIdUseCase } from "../../../../core/applications/usecases/promotion/GetPromotionByIdUseCase";

class GetPromotionByidController {
    handler(request: Request, response: Response) {

        const getPromotionById: IGetPromotionByIdUseCase =
            container.resolve<IGetPromotionByIdUseCase>(GetPromotionByIdUseCase);
        
        getPromotionById.execute(request.params.id).then(resp => {
            response.status(200).send({ "message": 'Promotion found', "id": resp })
        }).catch(error => {
            logger.error(`Get promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPromotionByidController };

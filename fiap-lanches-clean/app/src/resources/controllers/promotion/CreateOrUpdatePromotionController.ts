
import { Request, Response } from "express";
import { ICreateOrUpdatePromotionService } from "../../../services/interfaces/promotion/ICreateOrUpdatePromotionService";
import { CreateOrUpdatePromotionService } from "../../../services/impl/promotion/CreateOrUpdatePromotionService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class CreateOrUpdatePromotionController {
    handler(request: Request, response: Response) {

        const createOrUpdatePromotion: ICreateOrUpdatePromotionService =
            container.resolve<ICreateOrUpdatePromotionService>(CreateOrUpdatePromotionService);

        createOrUpdatePromotion.execute(request.body).then(resp => {
            response.status(request.body.id ? 200 : 201).send({ "message": `Promotion ${request.body.id ? 'updated' : 'created'}`, "id": resp })
        }).catch(error => {
            logger.error(`Post/Put promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CreateOrUpdatePromotionController };

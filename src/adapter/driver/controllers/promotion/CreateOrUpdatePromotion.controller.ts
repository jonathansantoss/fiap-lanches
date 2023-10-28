
import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { ICreateOrUpdateProductUseCase } from "../../../../core/applications/ports/in/product/ICreateOrUpdateProductUseCase";
import { CreateOrUpdateProductUseCase } from "../../../../core/applications/usecases/product/CreateOrUpdateProductUseCase";
import { logger } from '../../../../config/WinstonLog';
import { ICreateOrUpdatePromotionUseCase } from "../../../../core/applications/ports/in/promotion/ICreateOrUpdatePromotionUseCase";
import { CreateOrUpdatePromotionUseCase } from "../../../../core/applications/usecases/promotion/CreateOrUpdatePromotionUseCase ";

class CreateOrUpdatePromotionController {
    handler(request: Request, response: Response) {

        const createOrUpdatePromotion: ICreateOrUpdatePromotionUseCase =
            container.resolve<ICreateOrUpdatePromotionUseCase>(CreateOrUpdatePromotionUseCase);

        createOrUpdatePromotion.execute(request.body).then(resp => {
            response.status(request.body.id ? 200 : 201).send({ "message": `Promotion ${request.body.id ? 'updated' : 'created'}`, "id": resp })
        }).catch(error => {
            logger.error(`Post/Put promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CreateOrUpdatePromotionController };

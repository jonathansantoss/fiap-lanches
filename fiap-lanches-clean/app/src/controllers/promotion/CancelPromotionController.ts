
import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { CancelPromotionService } from "../../useCases/impl/promotion/CancelPromotionService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { PromotionRepository } from "../../repositories/impl/PromotionRepository";
import { CreateOrUpdateProductService } from "../../useCases/impl/product/CreateOrUpdateProductService";
import { GetProductByIdService } from "../../useCases/impl/product/GetProductByIdService";
import { CreateOrUpdatePromotionService } from "../../useCases/impl/promotion/CreateOrUpdatePromotionService";
import { GetActivePromotionsByProductIdService } from "../../useCases/impl/promotion/GetActivePromotionsByProductIdService";
import { GetPromotionByIdService } from "../../useCases/impl/promotion/GetPromotionByIdService";

class CancelPromotionController {

    public dataSource: IDataSource;
    public productDataSource: IDataSource;

    constructor(dataSource: IDataSource, productDataSource: IDataSource) {
        this.dataSource = dataSource;
        this.productDataSource = productDataSource;
    }


    handler = async (request: Request, response: Response) => {

        const cancelPromotionService = new CancelPromotionService();
        const createOrUpdatePromotion = new CreateOrUpdatePromotionService()
        const promotionRepository = new PromotionRepository(this.dataSource)

        const getActivePromotionsByProductIdService = new GetActivePromotionsByProductIdService()
        const createOrUpdateProductService = new CreateOrUpdateProductService()
        const productRepository = new ProductRepository(this.productDataSource)
        const getProductByIdService = new GetProductByIdService()
        const getPromotionById = new GetPromotionByIdService();


        cancelPromotionService.execute(request.params.id,
            promotionRepository,
            getPromotionById,
            createOrUpdatePromotion,
            getActivePromotionsByProductIdService,
            createOrUpdateProductService,
            productRepository,
            getProductByIdService
        ).then(resp => {
            response.status(200).send({ "message": 'Promotion cancelled' })
        }).catch(error => {
            logger.error(`Delete promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CancelPromotionController };

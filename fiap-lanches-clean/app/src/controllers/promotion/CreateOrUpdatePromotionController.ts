
import { Request, Response } from "express";
import { CreateOrUpdatePromotionService } from "../../useCases/impl/promotion/CreateOrUpdatePromotionService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { PromotionRepository } from "../../repositories/impl/PromotionRepository";
import { CreateOrUpdateProductService } from "../../useCases/impl/product/CreateOrUpdateProductService";
import { GetProductByIdService } from "../../useCases/impl/product/GetProductByIdService";
import { GetActivePromotionsByProductIdService } from "../../useCases/impl/promotion/GetActivePromotionsByProductIdService";
import { ILogger } from "../../configurations/Logger/ILogger";

class CreateOrUpdatePromotionController {

    public dataSource: IDataSource;
    public productDataSource: IDataSource;
    public logger: ILogger;

    constructor(dataSource: IDataSource, productDataSource: IDataSource, logger: ILogger) {
        this.dataSource = dataSource;
        this.productDataSource = productDataSource;
        this.logger = logger;
    }


    handler = async (request: Request, response: Response) => {

        const createOrUpdatePromotion = new CreateOrUpdatePromotionService()
        const promotionRepository = new PromotionRepository(this.dataSource)

        const getActivePromotionsByProductIdService = new GetActivePromotionsByProductIdService()
        const createOrUpdateProductService = new CreateOrUpdateProductService()
        const productRepository = new ProductRepository(this.productDataSource)
        const getProductByIdService = new GetProductByIdService()

        createOrUpdatePromotion.execute(request.body, promotionRepository, getActivePromotionsByProductIdService, createOrUpdateProductService, productRepository, getProductByIdService).then(resp => {
            response.status(request.body.id ? 200 : 201).send({ "message": `Promotion ${request.body.id ? 'updated' : 'created'}`, "id": resp })
        }).catch(error => {
            this.logger.error(`Post/Put promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CreateOrUpdatePromotionController };


import { Request, Response } from "express";
import { container } from "tsyringe";
import { logger } from "../../configurations/WinstonLog";
import { CreateOrUpdatePromotionService } from "../../useCases/impl/promotion/CreateOrUpdatePromotionService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { PromotionRepository } from "../../repositories/impl/PromotionRepository";
import { CreateOrUpdateProductService } from "../../useCases/impl/product/CreateOrUpdateProductService";
import { GetProductByIdService } from "../../useCases/impl/product/GetProductByIdService";
import { GetActivePromotionsByProductIdService } from "../../useCases/impl/promotion/GetActivePromotionsByProductIdService";

class CreateOrUpdatePromotionController {

    public dataSource: IDataSource;
    public productDataSource: IDataSource;

    constructor(dataSource: IDataSource, productDataSource: IDataSource) {
        this.dataSource = dataSource;
        this.productDataSource = productDataSource;
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
            logger.error(`Post/Put promotion: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { CreateOrUpdatePromotionController };

import { Request, Response } from "express";
import { DeleteProductService } from "../../useCases/impl/product/DeleteProductService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";
import { ILogger } from "../../configurations/Logger/ILogger";

class DeleteProductController {
    
    public dataSource: IDataSource;
    public logger: ILogger;

    constructor(dataSource: IDataSource, logger: ILogger) {
        this.dataSource = dataSource;
        this.logger = logger;
    }

    handler = async (request: Request, response: Response) => {
        const deleteProductService = new DeleteProductService();
        const productRepository = new ProductRepository(this.dataSource);

        deleteProductService.execute(request.query.id as string, productRepository).then(resp => {
            response.status(204).send()
        }
        ).catch(error => {
            this.logger.error(`Delete product: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })

    }
}

export { DeleteProductController }
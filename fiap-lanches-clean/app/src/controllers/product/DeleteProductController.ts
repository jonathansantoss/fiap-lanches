import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { DeleteProductService } from "../../useCases/impl/product/DeleteProductService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ProductRepository } from "../../repositories/impl/ProductRepository";

class DeleteProductController {
    
    public dataSource: IDataSource;

    constructor(dataSource: IDataSource) {
        this.dataSource = dataSource;
    }

    handler = async (request: Request, response: Response) => {
        const deleteProductService = new DeleteProductService();
        const productRepository = new ProductRepository(this.dataSource);

        deleteProductService.execute(request.query.id as string, productRepository).then(resp => {
            response.status(204).send()
        }
        ).catch(error => {
            logger.error(`Delete product: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })

    }
}

export { DeleteProductController }
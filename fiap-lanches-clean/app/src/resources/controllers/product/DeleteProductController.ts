import { Request, Response } from "express";
import { IDeleteProductService } from "../../../services/interfaces/product/IDeleteProductService";
import { DeleteProductService } from "../../../services/impl/product/DeleteProductService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class DeleteProductController {
    handler(request: Request, response: Response) {
        const deleteProductService: IDeleteProductService =
            container.resolve<IDeleteProductService>(DeleteProductService);

        deleteProductService.execute(request.query.id as string).then(resp => {
            response.status(204).send()
        }
        ).catch(error => {
            logger.error(`Delete product: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })

    }
}

export { DeleteProductController }
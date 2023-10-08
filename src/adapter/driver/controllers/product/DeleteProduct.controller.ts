import { container } from "tsyringe";
import { DeleteProductUseCase } from "../../../../core/applications/usecases/product/DeleteProductUseCase";
import { Request, Response } from "express";
import { IDeleteProductUseCase } from "../../../../core/applications/ports/in/product/IDeleteProductUseCase";

class DeleteProductController {
    handler(request: Request, response: Response) {
        const deleteProductUseCase: IDeleteProductUseCase =
            container.resolve<IDeleteProductUseCase>(DeleteProductUseCase);

        deleteProductUseCase.execute(request.query.id as string).then(resp => {
            response.status(204).send()
        }
        ).catch(error => {
            console.error(`Delete product: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })

    }
}

export { DeleteProductController }
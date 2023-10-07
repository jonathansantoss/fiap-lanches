import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateProductUseCase } from "../../../../core/applications/usecases/product/CreateProductUseCase";
import { ICreateProductUseCase } from "../../../../core/applications/ports/in/product/ICreateProductUseCase";

class CreateProductController {
  handler(request: Request, response: Response) {
    const createProductUseCase: ICreateProductUseCase =
      container.resolve<ICreateProductUseCase>(CreateProductUseCase);

    createProductUseCase.execute(request.body).then(resp => {
      response.status(200).send(resp)
    }).catch(error => {
      console.error(`Post product: ${error.message}`)
      response.status(500).send(error.message);
    })
  }
}

export { CreateProductController };

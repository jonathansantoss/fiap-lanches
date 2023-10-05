import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateProductUseCase } from "../../../../core/applications/usecases/product/CreateProductUseCase";
import { ICreateProductUseCase } from "../../../../core/applications/ports/in/product/ICreateProductUseCase";

class CreateProductController {
  handler(request: Request, response: Response) {
    const createProductUseCase: ICreateProductUseCase =
      container.resolve<ICreateProductUseCase>(CreateProductUseCase);

    response.status(200).send("pong");
  }
}

export { CreateProductController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateProductUseCase } from "../../../../core/applications/usecases/product/CreateProductUseCase";

class CreateProductController {
  handler(request: Request, response: Response) {
    const createProductUseCase = container.resolve(CreateProductUseCase);

    response.status(200).send("pong");
  }
}

export { CreateProductController };

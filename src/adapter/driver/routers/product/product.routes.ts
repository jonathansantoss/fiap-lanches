import { Router } from "express";
import { CreateProductController } from "../../controllers/product/CreateProduct.controller";
import { CreateProductUseCase } from "../../../../core/applications/usecases/product/CreateProductUseCase";

const productRouter = Router();
const createProductController = new CreateProductController();

productRouter.post("/", createProductController.handler);

export { productRouter };

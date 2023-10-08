import { Router } from "express";
import { CreateProductController } from "../../controllers/product/CreateProduct.controller";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { SaveProductSchema } from "../../schemas/product/SaveProductSchema";
import { GetProductByCategorySchema } from "../../schemas/product/GetProductByCategorySchema";
import { GetProductByCategoryController } from "../../controllers/product/GetProductByCategory.controller";

const productRouter = Router();

productRouter.post(
  "/",
  validateBody(SaveProductSchema),
  new CreateProductController().handler
);

productRouter.get(
  "/",
  validateQuery(GetProductByCategorySchema),
  new GetProductByCategoryController().handler
);

export { productRouter };

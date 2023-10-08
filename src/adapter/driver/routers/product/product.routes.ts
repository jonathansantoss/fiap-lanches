import { Router } from "express";
import { CreateProductController } from "../../controllers/product/CreateProduct.controller";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { GetProductByCategorySchema, ProductIdSchema, SaveProductSchema } from "../../schemas/ProductSchemas";
import { GetProductByCategoryController } from "../../controllers/product/GetProductByCategory.controller";
import { DeleteProductController } from "../../controllers/product/DeleteProduct.controller";

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


productRouter.delete(
  "/",
  validateQuery(ProductIdSchema),
  new DeleteProductController().handler
);

export { productRouter };

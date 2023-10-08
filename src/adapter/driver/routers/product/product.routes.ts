import { Router } from "express";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { GetProductByCategorySchema, ProductIdSchema, SaveProductSchema, UpdateProductSchema } from "../../schemas/ProductSchemas";
import { GetProductByCategoryController } from "../../controllers/product/GetProductByCategory.controller";
import { DeleteProductController } from "../../controllers/product/DeleteProduct.controller";
import { CreateOrUpdateProductController } from "../../controllers/product/CreateOrUpdateProduct.controller";

const productRouter = Router();

productRouter.post(
  "/",
  validateBody(SaveProductSchema),
  new CreateOrUpdateProductController().handler
);

productRouter.put(
  "/",
  validateBody(UpdateProductSchema),
  new CreateOrUpdateProductController().handler
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

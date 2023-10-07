import { Router } from "express";
import { CreateProductController } from "../../controllers/product/CreateProduct.controller";
import { validate } from "../../midleware/validator/validate";
import { productSchema } from "../../schemas/ProductSchema";

const productRouter = Router();
const createProductController = new CreateProductController();

productRouter.post(
  "/",
  validate(productSchema),
  createProductController.handler
);

export { productRouter };

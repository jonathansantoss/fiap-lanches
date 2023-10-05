import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";

const router = Router();

router.use("/clients", clientRouter);
router.use("/orders", orderRouter);
router.use("/products", productRouter);

export { router };

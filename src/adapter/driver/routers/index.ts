import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";

const router = Router();

router.use("/api/v1/clients", clientRouter);
router.use("/api/v1/orders", orderRouter);
router.use("/api/v1/products", productRouter);

export { router };

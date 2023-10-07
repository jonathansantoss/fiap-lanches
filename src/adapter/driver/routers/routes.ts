import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";

const router = Router();

router.use("/api/v1/client", clientRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/product", productRouter);

export { router };

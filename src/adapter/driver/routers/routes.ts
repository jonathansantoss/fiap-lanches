import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";



/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Endpints to control products
 *   - name: Clients
 *     description: Endpints to control clients
 *   - name: Orders
 *     description: Endpints to control orders
 */
const router = Router();

router.use("/api/v1/client", clientRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/product", productRouter);

export { router };


import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";
import { employeeRouter } from "./employee/employee.routes";
import { paymentRouter } from "./payment/payment.routes";
import { promotionRouter } from "./promotion/promotion.routes";

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Endpoints to control products
 *   - name: Clients
 *     description: Endpoints to control clients
 *   - name: Orders
 *     description: Endpoints to control orders
 *   - name: Employees
 *     description: Endpoints to control employees
 *   - name: Payments
 *     description: Endpoints to control payments
 *   - name: Promotions
 *     description: Endpoints to control promotions
 */
const router = Router();

router.use("/api/v1/client", clientRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/product", productRouter);
router.use("/api/v1/employees", employeeRouter);
router.use("/api/v1/payments", paymentRouter);
router.use("/api/v1/promotions", promotionRouter);

export { router };
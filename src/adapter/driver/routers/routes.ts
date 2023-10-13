import { Router } from "express";
import { clientRouter } from "./client/client.routes";
import { orderRouter } from "./order/order.routes";
import { productRouter } from "./product/product.routes";
import { employeeRouter } from "./employee/employee.routes";



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
 */
const router = Router();

router.use("/api/v1/client", clientRouter);
router.use("/api/v1/order", orderRouter);
router.use("/api/v1/product", productRouter);
router.use("/api/v1/employees", employeeRouter)

export { router };

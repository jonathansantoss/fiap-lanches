import { Router } from "express";
import { CreateOrderController } from "../../controllers/order/CreateOrder.controller";

const orderRouter = Router();
const createOrderController = new CreateOrderController();

orderRouter.post("/", createOrderController.handler);

export { orderRouter };

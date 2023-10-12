import { Router } from "express";
import { CreateOrderController } from "../../controllers/order/CreateOrder.controller";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { GetByStatusSchema, SaveOrderSchema, UpdateStatusSchema } from "../../schemas/OrderSchemas";
import { UpdateOrderStatusController } from "../../controllers/order/UpdateOrderStatus.controller";
import { GetOrderByStatusController } from "../../controllers/order/GetOrderByStatus";

const orderRouter = Router();

/**
 * @swagger
 * /api/v1/order:
 *   post:
 *     summary: Save order
 *     tags:
 *       - Orders
 *     description: Save order based in body payload provied.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             oneOf:
 *               - required:
 *                 - value
 *                 - productsIds
 *             properties:
 *               value:
 *                 type: number
 *                 description: Order's final value.
 *               productsIds:
 *                 type: array
 *                 description: Product's list.
 *                 items:
 *                   type: string
 *               clientCpf:
 *                 type: string
 *                 description: Client's CPF.
 *     responses:
 *       '201':
 *         description: Order saved with success with status "Received"
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
orderRouter.post("/",
    validateBody(SaveOrderSchema),
    new CreateOrderController().handler);


/**
* @swagger
 * /api/v1/order:
 *   put:
 *     summary: Update order status
 *     tags:
 *       - Orders
 *     description: Update order status based in payload provided.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id that is going to be updated
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: Order category that is going to be updated
 *     responses:
 *       '200':
 *         description: Order updated
 *       '400':
 *         description: Bad payload given to API
 *       '404':
 *         description: Order not found
 *       '500':
 *         description: Internal server error
 */
orderRouter.put("/",
    validateQuery(UpdateStatusSchema),
    new UpdateOrderStatusController().handler);


/**
* @swagger
 * /api/v1/order:
 *   get:
 *     summary: Get order by status
 *     tags:
 *       - Orders
 *     description: Update order status based in payload provided.
 *     parameters:
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: Order status that is going to be recovered
 *     responses:
 *       '200':
 *         description: Order list recovered with success.
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
orderRouter.get("/",
    validateQuery(GetByStatusSchema),
    new GetOrderByStatusController().handler);

export { orderRouter };

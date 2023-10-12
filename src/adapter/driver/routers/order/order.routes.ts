import { Router } from "express";
import { CreateOrderController } from "../../controllers/order/CreateOrder.controller";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { SaveOrderSchema, UpdateStatusSchema } from "../../schemas/OrderSchemas";
import { UpdateOrderStatusController } from "../../controllers/order/UpdateOrderStatus.controller";

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
 *       - Products
 *     description: Update order status based in payload provided.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product category that is going to be recovered
 *       - in: query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: Product category that is going to be recovered
 *     responses:
 *       '200':
 *         description: Product list recovered with success.
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


export { orderRouter };

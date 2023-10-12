import { Router } from "express";
import { CreateOrderController } from "../../controllers/order/CreateOrder.controller";
import { validateBody } from "../../midleware/validator/validate";
import { SaveOrderSchema } from "../../schemas/OrderSchemas";

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

export { orderRouter };

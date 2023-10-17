import { Router } from "express";
import { CreatePaymentConroller } from "../../controllers/payment/CreatePayment.controller";
import { validateQuery } from "../../midleware/validator/validate";
import { createPaymentSchema } from "../../schemas/PaymentSchemas";

const paymentRouter = Router();

const createPaymentConroller = new CreatePaymentConroller();

/**
* @swagger
 * /api/v1/payments:
 *   put:
 *     summary: Update order payment
 *     tags:
 *       - Payments
 *     description: Update order payment based in payload provided.
 *     parameters:
 *       - in: query
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id that is going to be updated
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
paymentRouter.put(
  "/",
  validateQuery(createPaymentSchema),
  createPaymentConroller.handler
);

export { paymentRouter };

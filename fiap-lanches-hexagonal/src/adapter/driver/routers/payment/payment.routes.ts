import { Router } from "express";
import { UpdatePaymentConroller } from "../../controllers/payment/UpdatePayment.controller";
import { validateQuery } from "../../midleware/validator/validate";
import { createPaymentSchema } from "../../schemas/PaymentSchemas";

const paymentRouter = Router();

const updatePaymentConroller = new UpdatePaymentConroller();

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
  updatePaymentConroller.handler
);

export { paymentRouter };

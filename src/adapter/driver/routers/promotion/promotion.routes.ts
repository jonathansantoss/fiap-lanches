
import { Router } from "express";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { CreateOrUpdatePromotionController } from "../../controllers/promotion/CreateOrUpdatePromotion.controller";
import { SavePromotionSchema } from "../../schemas/PromotionSchemas";
const promotionRouter = Router();
/**
 * @swagger
 * /api/v1/promotion:
 *   post:
 *     summary: Save or update product
 *     tags:
 *       - Promotions
 *     description: Save product based in body payload provied.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Promotion's id, used to updated promotion.
 *                 required: false
 *               productId:
 *                 type: string
 *                 description: Product's id.
 *               promotionValue:
 *                 type: number
 *                 description: Promotion's value.
 *               startAt:
 *                 type: string
 *                 format: date
 *                 description: Promotion's start date.
 *               endAt:
 *                 type: string
 *                 format: date
 *                 description: Promotion's end date.
 *     responses:
 *       '201':
 *         description: Promotion saved/updated with success
 *       '404':
 *         description: Product not found
 *       '409':
 *         description: Product with promotion active
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
promotionRouter.post(
  "/",
  validateBody(SavePromotionSchema),
  new CreateOrUpdatePromotionController().handler
);

export { promotionRouter };

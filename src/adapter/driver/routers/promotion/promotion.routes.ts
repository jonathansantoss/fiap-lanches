
import { Router } from "express";
import { validateBody, validateParams, validateQuery } from "../../midleware/validator/validate";
import { CreateOrUpdatePromotionController } from "../../controllers/promotion/CreateOrUpdatePromotion.controller";
import { SavePromotionSchema, ValidatePromotionId } from "../../schemas/PromotionSchemas";
import { GetPromotionByidController } from "../../controllers/promotion/GetPromotionById.controller";
import { CancelPromotionController } from "../../controllers/promotion/CancelPromotion.controller";
const promotionRouter = Router();
/**
 * @swagger
 * /api/v1/promotion:
 *   post:
 *     summary: Save or update promotion
 *     tags:
 *       - Promotions
 *     description: Save promotion based in body payload provied.
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
 *         description: promotion not found
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

/**
 * @swagger
 * /api/v1/promotion/{id}:
 *   post:
 *     summary: Recover promotion
 *     tags:
 *       - Promotions
 *     description: Get promotion by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description:  Promotions's id is going to recover.
 *     responses:
 *       '200':
 *         description: Promotion found
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
promotionRouter.get(
  "/:id",
  validateParams(ValidatePromotionId),
  new GetPromotionByidController().handler
);


/**
 * @swagger
 * /api/v1/promotion/{id}:
 *   post:
 *     summary: Recover promotion
 *     tags:
 *       - Promotions
 *     description: Cancel promotion by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description:  Promotions's id is going to be cancelled.
 *     responses:
 *       '200':
 *         description: Promotion found
 *       '400':
 *         description: Bad payload given to API
 *       '404':
 *         description: Promotion not found
 *       '500':
 *         description: Internal server error
 */
promotionRouter.delete(
  "/:id",
  validateParams(ValidatePromotionId),
  new CancelPromotionController().handler
);

export { promotionRouter };

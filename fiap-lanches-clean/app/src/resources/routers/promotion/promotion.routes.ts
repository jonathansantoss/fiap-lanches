
import { Router } from "express";
import { validateBody, validateParams } from "../../midleware/validator/validate";
import { CancelPromotionController } from "../../../controllers/promotion/CancelPromotionController";
import { CreateOrUpdatePromotionController } from "../../../controllers/promotion/CreateOrUpdatePromotionController";
import { GetPromotionByidController } from "../../../controllers/promotion/GetPromotionByIdController";
import { SavePromotionSchema, ValidatePromotionId } from "../../schemas/PromotionSchemas";
import { Promotion } from "../../../configurations/DataSourceModelation/PromotionEntityConfig";
import { Product } from "../../../configurations/DataSourceModelation/ProductEntityConfig";
import { AppDataSource } from "../../../configurations/DataSource";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";
import { LoggerImpl } from "../../../configurations/Logger/LoggerImpl";

const productDataSource = AppDataSource.getRepository(Product);
const typeOrmDataSourceProduct = new TypeOrmDataSource(productDataSource);

const promotiontDataSource = AppDataSource.getRepository(Promotion);
const typeOrmDataSourcePromotion = new TypeOrmDataSource(promotiontDataSource);

const logger = new LoggerImpl();

const createOrUpdatePromotionController = new CreateOrUpdatePromotionController(typeOrmDataSourcePromotion, typeOrmDataSourceProduct, logger);
const getPromotionByidController = new GetPromotionByidController(typeOrmDataSourcePromotion, logger);
const cancelPromotionController = new CancelPromotionController(typeOrmDataSourcePromotion, typeOrmDataSourceProduct, logger);

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
  createOrUpdatePromotionController.handler
);

/**
 * @swagger
 * /api/v1/promotion/{id}:
 *   get:
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
  getPromotionByidController.handler
);


/**
 * @swagger
 * /api/v1/promotion/{id}:
 *   delete:
 *     summary: Cancel promotion
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
  cancelPromotionController.handler
);

export { promotionRouter };

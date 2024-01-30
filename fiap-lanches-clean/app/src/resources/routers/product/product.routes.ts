
import { Router } from "express";
import { validateBody, validateParams, validateQuery } from "../../midleware/validator/validate";
import { GetProductByCategorySchema, ProductIdSchema, SaveProductSchema, UpdateProductSchema } from "../../schemas/ProductSchemas";
import { CreateOrUpdateProductController } from "../../../controllers/product/CreateOrUpdateProductController";
import { DeleteProductController } from "../../../controllers/product/DeleteProductController";
import { GetProductByCategoryController } from "../../../controllers/product/GetProductByCategoryController";
import { GetProductByIdController } from "../../../controllers/product/GetProductByIdController";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";
import { AppDataSource } from "../../../configurations/DataSource";
import { Product } from "../../../configurations/DataSourceModelation/ProductEntityConfig";
import { LoggerImpl } from "../../../configurations/Logger/LoggerImpl";

const productRouter = Router();

const logger = new LoggerImpl();
const productDataSource = AppDataSource.getRepository(Product);
const typeOrmDataSourceOrder = new TypeOrmDataSource(productDataSource);

const createOrUpdateProductController = new CreateOrUpdateProductController(typeOrmDataSourceOrder, logger);
const getProductByCategoryController = new GetProductByCategoryController(typeOrmDataSourceOrder, logger)
const deleteProductController = new DeleteProductController(typeOrmDataSourceOrder, logger)
const getProductByIdController = new GetProductByIdController(typeOrmDataSourceOrder, logger)

/**
 * @swagger
 * /api/v1/product:
 *   post:
 *     summary: Save product
 *     tags:
 *       - Products
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
 *                 description: Product's id. It is used in case of updates.
 *                 required: false
 *               name:
 *                 type: string
 *                 description: Product's name.
 *               value:
 *                 type: number
 *                 description: Product's value.
 *               amount:
 *                 type: integer
 *                 description: Product's amount.
 *               category:
 *                 type: string
 *                 description: Product's category.
 *                 @enum ['Main Dish', 'Side Dish', 'Drink']
 *     responses:
 *       '201':
 *         description: Product saved/updated with success
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
productRouter.post(
    "/",
    validateBody(SaveProductSchema),
    createOrUpdateProductController.handler
);

/**
 * @swagger
 * /api/v1/product:
 *   put:
 *     summary: Update product
 *     tags:
 *       - Products
 *     description: Update product based in body payload provided.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: Product's id.
 *               name:
 *                 type: string
 *                 description: Product's name.
 *               value:
 *                 type: number
 *                 description: Product's value.
 *               amount:
 *                 type: integer
 *                 description: Product's amount.
 *               category:
 *                 type: string
 *                 description: Product's category.
 *                 @enum ['Main Dish', 'Side Dish', 'Drink']
 *     responses:
 *       '200':
 *         description: Product updated with success
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
productRouter.put(
    "/",
    validateBody(UpdateProductSchema),
    createOrUpdateProductController.handler
);

/**
 * @swagger
 * /api/v1/product:
 *   get:
 *     summary: Get product by category
 *     tags:
 *       - Products
 *     description: Get product by category provied in query params. It is going to return an empty list if there is no products with provided category.
 *     parameters:
 *       - in: query
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Product category that is going to be recovered
 *     responses:
 *       '200':
 *         description: Product list recovered with success.
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
productRouter.get(
    "/",
    validateQuery(GetProductByCategorySchema),
    getProductByCategoryController.handler
);

/**
 * @swagger
 * /api/v1/product:
 *   delete:
 *     summary: Delete product by ID
 *     tags:
 *       - Products
 *     description: Delete product based in ID. If ID is not found is going to be returned OK status 200.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product's id that is going to be deleted.
 *     responses:
 *       '200':
 *         description: Request was processed with success.
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
productRouter.delete(
    "/",
    validateQuery(ProductIdSchema),
    deleteProductController.handler
);

/**
 * @swagger
 * /api/v1/product/{id}:
 *   get:
 *     summary: Recover promotion
 *     tags:
 *       - Products
 *     description: Get product by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description:  Product's id is going to be recovered.
 *     responses:
 *       '200':
 *         description: Product found
 *       '400':
 *         description: Bad payload given to API
 *       '500':
 *         description: Internal server error
 */
productRouter.get(
    "/:id",
    validateParams(ProductIdSchema),
    getProductByIdController.handler
);

export { productRouter };

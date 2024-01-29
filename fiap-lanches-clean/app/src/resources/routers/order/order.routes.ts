import { Router } from "express";
import { validateBody, validateQuery } from "../../midleware/validator/validate";
import { GetByStatusSchema, SaveOrderSchema, UpdateStatusSchema } from "../../schemas/OrderSchemas";
import { CreateOrderController } from "../../../controllers/order/CreateOrderController";
import { GetAllUnfinishedOrdersController } from "../../../controllers/order/GetAllUnfinishedOrdersController";
import { GetOrderByStatusController } from "../../../controllers/order/GetOrderByStatusController";
import { UpdateOrderStatusController } from "../../../controllers/order/UpdateOrderStatusController";
import { AppDataSource } from "../../../configurations/DataSource";
import { Client } from "../../../configurations/DataSourceModelation/ClientEntityConfig";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";
import { Order } from "../../../configurations/DataSourceModelation/OrderEntityConfig";
import { Product } from "../../../configurations/DataSourceModelation/ProductEntityConfig";

const orderRouter = Router();

const clientRepositorySource = AppDataSource.getRepository(Client);
const typeOrmDataSourceClient = new TypeOrmDataSource(clientRepositorySource);

const orderDataSource = AppDataSource.getRepository(Order);
const typeOrmDataSourceOrder = new TypeOrmDataSource(orderDataSource);

const productDataSource = AppDataSource.getRepository(Product);
const typeOrmDataSourceProduct = new TypeOrmDataSource(productDataSource);

const createOrderController = new CreateOrderController(typeOrmDataSourceOrder, typeOrmDataSourceClient, typeOrmDataSourceProduct);
const updateOrderStatusController = new UpdateOrderStatusController(typeOrmDataSourceOrder);
const getOrderByStatusController = new GetOrderByStatusController(typeOrmDataSourceOrder);
const getAllUnfinishedOrdersController = new GetAllUnfinishedOrdersController(typeOrmDataSourceOrder);

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
    createOrderController.handler);


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
    updateOrderStatusController.handler);



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
    getOrderByStatusController.handler);

/**
* @swagger
 * /api/v1/order/unfinished:
 *   get:
 *     summary: Get all unfinished orders
 *     tags:
 *       - Orders
 *     description: Get all unfinished orders.
 *     responses:
 *       '200':
 *         description: Order list recovered with success.
 *       '500':
 *         description: Internal server error
 */
orderRouter.get("/unfinished",
    getAllUnfinishedOrdersController.handler);

export { orderRouter };

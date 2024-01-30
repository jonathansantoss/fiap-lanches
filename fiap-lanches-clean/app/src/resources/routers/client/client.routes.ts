import { Router } from "express";
import {
  validateBody,
  validateParams,
} from "../../midleware/validator/validate";
import {
  createClientSchema,
  deleteClientSchema,
  getClientSchema,
  updateClientSchema,
} from "../../schemas/ClientSchemas";
import { CreateClientController } from "../../../controllers/client/CreateClientController";
import { DeleteClientController } from "../../../controllers/client/DeleteClientController";
import { FindClientByCpfController } from "../../../controllers/client/FindClientByCpfController";
import { ListClientsController } from "../../../controllers/client/ListClientsController";
import { UpdateClientController } from "../../../controllers/client/UpdateClientController";
import { Client } from "../../../configurations/DataSourceModelation/ClientEntityConfig";
import { AppDataSource } from "../../../configurations/DataSource";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";
import { LoggerImpl } from "../../../configurations/Logger/LoggerImpl";

const clientRouter = Router();

const logger = new LoggerImpl();
const clientRepositorySource = AppDataSource.getRepository(Client);
const typeOrmDataSource = new TypeOrmDataSource(clientRepositorySource);

const createClientController = new CreateClientController(typeOrmDataSource, logger);
const deleteClientController = new DeleteClientController(typeOrmDataSource, logger);
const findClientByCpfController = new FindClientByCpfController(typeOrmDataSource);
const updateClientController = new UpdateClientController(typeOrmDataSource);
const listClientsController = new ListClientsController(typeOrmDataSource);

/**
 * @swagger
 * /api/v1/client:
 *  post:
 *      summary: Save client
 *      tags:
 *       - Clients
 *      description: Save client based in body payload provied.
 *      requestBody:
 *          required: false
 *          content:
 *               application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          cpf:
 *                              type: string
 *                              description: Client's cpf.
 *                          name:
 *                              type: string
 *                              description: Client's name.
 *                          email:
 *                              type: string
 *                              description: Client's email.
 *      responses:
 *          '201':
 *              description: Client saved with success
 *          '400':
 *              description: Bad payload given to API
 *          '500':
 *              description: Internal server error
 */
clientRouter.post(
  "/",
  validateBody(createClientSchema),
  createClientController.handler
);
/**
 * @swagger
 * /api/v1/client/{cpf}:
 *  delete:
 *      summary: delete client
 *      tags:
 *       - Clients
 *      parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description:  The client's CPF is going to delete.
 *      responses:
 *          '200':
 *            description: Client was deleted with success.
 *          '400':
 *            description: Bad payload given to API
 *          '404':
 *              description: Not found client
 *          '500':
 *            description: Internal server error
 */
clientRouter.delete(
  "/:cpf",
  validateParams(deleteClientSchema),
  deleteClientController.handler
);
/**
 * @swagger
 * /api/v1/client/{cpf}:
 *  get:
 *      summary: Get client
 *      tags:
 *       - Clients
 *      description: Get client by CPF.
 *      parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description:  The client's CPF is going to get.
 *      responses:
 *          '200':
 *              description: Get one client
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: Client's name.
 *                              cpf:
 *                                  type: string
 *                                  description: Client's name.
 *                              name:
 *                                  type: string
 *                                  description: Client's name.
 *                              email:
 *                                  type: string
 *                                  description: Client's name.
 *                              orders:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: string
 *                                              description: Order's id.
 *                                          value:
 *                                              type: number
 *                                              description: Order's value.
 *                                          products:
 *                                              type: array
 *                                              items:
 *                                                  type: object
 *                                                  properties:
 *                                                      id:
 *                                                          type: string
 *                                                          description: Product's id.
 *                                                      name:
 *                                                          type: string
 *                                                          description: Product's name.
 *                                                      value:
 *                                                          type: number
 *                                                          description: Product's value.
 *                                                      amount:
 *                                                          type: number
 *                                                          description: Product's amount.
 *                                                      category:
 *                                                          type: string
 *                                                          enum:
 *                                                              - Main Dish
 *                                                              - Side Dish
 *                                                              - Drink
 *                                                          description: Product's category.
 *                                              description: Order's products.
 *                                          startedAt:
 *                                              type: string
 *                                              format:	date-time
 *                                              description: Order's startedAt.
 *                                          deliveredAt:
 *                                              type: string
 *                                              format:	date-time
 *                                              description: Order's deliveredAt.
 *                                          status:
 *                                              type: string
 *                                              enum:
 *                                                  - received
 *                                                  - preparing
 *                                                  - done
 *                                                  - cancelled
 *                                                  - finished
 *                                              description: Order's status.
 *          '400':
 *              description: Bad payload given to API
 *          '404':
 *              description: Not found client
 *          '500':
 *              description: Internal server error
 */
clientRouter.get(
  "/:cpf",
  validateParams(getClientSchema),
  findClientByCpfController.handler
);
/**
 * @swagger
 * /api/v1/client:
 *  put:
 *      summary: Update client
 *      tags:
 *       - Clients
 *      description: Update client based in body payload provied.
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                              description: Client's id.
 *                          cpf:
 *                              type: string
 *                              description: Client's cpf.
 *                          name:
 *                              type: string
 *                              description: Client's name.
 *                          email:
 *                              type: string
 *                              description: Client's email.
 *      responses:
 *          '201':
 *              description: Client updated with success
 *          '400':
 *              description: Bad payload given to API
 *          '404':
 *              description: Not found client
 *          '500':
 *              description: Internal server error
 */
clientRouter.put(
  "/",
  validateBody(updateClientSchema),
  updateClientController.handler
);
/**
 * @swagger
 * /api/v1/client:
 *  get:
 *      summary: Get all client
 *      tags:
 *       - Clients
 *      description: Get all client.
 *      responses:
 *          '200':
 *              description: A list of clients
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      description: Client's id.
 *                                  cpf:
 *                                      type: string
 *                                      description: Client's cpf.
 *                                  name:
 *                                      type: string
 *                                      description: Client's name.
 *                                  email:
 *                                      type: string
 *                                      description: Client's email.
 *                                  orders:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: string
 *                                                  description: Order's id.
 *                                              value:
 *                                                  type: number
 *                                                  description: Order's value.
 *                                              products:
 *                                                  type: array
 *                                                  items:
 *                                                      type: object
 *                                                      properties:
 *                                                          id:
 *                                                              type: string
 *                                                              description: Product's id.
 *                                                          name:
 *                                                              type: string
 *                                                              description: Product's name.
 *                                                          value:
 *                                                              type: number
 *                                                              description: Product's value.
 *                                                          amount:
 *                                                              type: number
 *                                                              description: Product's amount.
 *                                                          category:
 *                                                              type: string
 *                                                              enum:
 *                                                                  - Main Dish
 *                                                                  - Side Dish
 *                                                                  - Drink
 *                                                              description: Product's category.
 *                                                  description: Order's products.
 *                                              startedAt:
 *                                                  type: string
 *                                                  format:	date-time
 *                                                  description: Order's startedAt.
 *                                              deliveredAt:
 *                                                  type: string
 *                                                  format:	date-time
 *                                                  description: Order's deliveredAt.
 *                                              status:
 *                                                  type: string
 *                                                  enum:
 *                                                      - received
 *                                                      - preparing
 *                                                      - done
 *                                                      - cancelled
 *                                                      - finished
 *                                                  description: Order's status.
 *          '500':
 *              description: Internal server error
 */
clientRouter.get("/", listClientsController.handler);

export { clientRouter };

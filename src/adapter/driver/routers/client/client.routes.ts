import { Router } from "express";
import { CreateClientController } from "../../controllers/client/CreateClient.controller";
import { DeleteClientController } from "../../controllers/client/DeleteClient.controller";
import { FindClientByCpfController } from "../../controllers/client/FindClientByCpf.controller";
import { UpdateClientController } from "../../controllers/client/UpdateClient.controller";
import { ListClientsController } from "../../controllers/client/ListClients.controller";

const clientRouter = Router();
const createClientController = new CreateClientController();
const deleteClientController = new DeleteClientController();
const findClientByCpfController = new FindClientByCpfController();
const updateClientController = new UpdateClientController();
const listClientsController = new ListClientsController();

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
 *                              description: Client's name.
 *                          name:
 *                              type: string
 *                              description: Client's name.
 *                          email:
 *                              type: string
 *                              description: Client's name.
 *      responses:
 *          '201':
 *              description: Client saved with success
 *          '400':
 *              description: Bad payload given to API
 *          '500':
 *              description: Internal server error
 */
clientRouter.post("/", createClientController.handler);
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
clientRouter.delete("/:cpf", deleteClientController.handler);
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
 *                                              description: Order's startedAt.
 *                                          deliveredAt:
 *                                              type: string
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
clientRouter.get("/:cpf", findClientByCpfController.handler);
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
clientRouter.put("/", updateClientController.handler);
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
 *                                      description: Client's name.
 *                                  cpf:
 *                                      type: string
 *                                      description: Client's name.
 *                                  name:
 *                                      type: string
 *                                      description: Client's name.
 *                                  email:
 *                                      type: string
 *                                      description: Client's name.
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
 *                                                  description: Order's startedAt.
 *                                              deliveredAt:
 *                                                  type: string
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

import { Router } from "express";
import {
  validateBody,
  validateParams,
} from "../../midleware/validator/validate";
import {
  createEmployeeSchema,
  deleteEmployeeSchema,
  updateEmployeeSchema,
} from "../../schemas/EmployeeSchemas";
import { CreateEmployeeController } from "../../../controllers/employee/CreateEmployeeController";
import { DeleteEmployeeController } from "../../../controllers/employee/DeleteEmployeeController";
import { ListEmployeesController } from "../../../controllers/employee/ListEmployeesController";
import { UpdateEmployeeController } from "../../../controllers/employee/UpdateEmployeeController";
import { AppDataSource } from "../../../configurations/DataSource";
import { Employee } from "../../../configurations/DataSourceModelation/EmployeeEntityConfig";
import { TypeOrmDataSource } from "../../../repositories/dataSource/TypeOrmDataSource";

const employeeRouter = Router();

const clientRepositorySource = AppDataSource.getRepository(Employee);
const typeOrmDataSource = new TypeOrmDataSource(clientRepositorySource);

const createEmployeeController = new CreateEmployeeController(typeOrmDataSource);
const deleteEmployeeController = new DeleteEmployeeController(typeOrmDataSource);
const updateEmployeeController = new UpdateEmployeeController(typeOrmDataSource);
const listEmployeesController = new ListEmployeesController(typeOrmDataSource);

/**
 * @swagger
 * /api/v1/employees:
 *  post:
 *      summary: Save employee
 *      tags:
 *       - Employees
 *      description: Save employee based in body payload provied.
 *      requestBody:
 *          required: false
 *          content:
 *               application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          cpf:
 *                              type: string
 *                              description: Employee's cpf.
 *                          name:
 *                              type: string
 *                              description: Employee's name.
 *                          email:
 *                              type: string
 *                              description: Employee's email.
 *      responses:
 *          '201':
 *              description: Employee saved with success
 *          '400':
 *              description: Bad payload given to API
 *          '500':
 *              description: Internal server error
 */
employeeRouter.post(
  "/",
  validateBody(createEmployeeSchema),
  createEmployeeController.handler
);
/**
 * @swagger
 * /api/v1/employees/{cpf}:
 *  delete:
 *      summary: delete employee
 *      tags:
 *       - Employees
 *      parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description:  The employee's CPF is going to delete.
 *      responses:
 *          '200':
 *            description: Employee was deleted with success.
 *          '400':
 *            description: Bad payload given to API
 *          '404':
 *              description: Not found employee
 *          '500':
 *            description: Internal server error
 */
employeeRouter.delete(
  "/:cpf",
  validateParams(deleteEmployeeSchema),
  deleteEmployeeController.handler
);
/**
 * @swagger
 * /api/v1/employees:
 *  put:
 *      summary: Update employee
 *      tags:
 *       - Employees
 *      description: Update employee based in body payload provied.
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                              description: Employee's id.
 *                          cpf:
 *                              type: string
 *                              description: Employee's cpf.
 *                          name:
 *                              type: string
 *                              description: Employee's name.
 *                          email:
 *                              type: string
 *                              description: Employee's email.
 *      responses:
 *          '201':
 *              description: Employee updated with success
 *          '400':
 *              description: Bad payload given to API
 *          '404':
 *              description: Not found employee
 *          '500':
 *              description: Internal server error
 */
employeeRouter.put(
  "/",
  validateBody(updateEmployeeSchema),
  updateEmployeeController.handler
);
/**
 * @swagger
 * /api/v1/employees:
 *  get:
 *      summary: Get all employee
 *      tags:
 *       - Employees
 *      description: Get all employee.
 *      responses:
 *          '200':
 *              description: A list of employees
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      description: Employee's id.
 *                                  cpf:
 *                                      type: string
 *                                      description: Employee's cpf.
 *                                  name:
 *                                      type: string
 *                                      description: Employee's name.
 *                                  email:
 *                                      type: string
 *                                      description: Employee's email.
 *          '500':
 *              description: Internal server error
 */
employeeRouter.get("/", listEmployeesController.handler);

export { employeeRouter };

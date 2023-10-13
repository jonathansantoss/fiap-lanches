import { Router } from "express";
import { CreateEmployeeController } from "../../controllers/employee/CreateEmployee.controller";
import { DeleteEmployeeController } from "../../controllers/employee/DeleteEmployee.controller";
import { UpdateEmployeeController } from "../../controllers/employee/UpdateEmployee.controller";
import { ListEmployeesController } from "../../controllers/employee/ListEmployees.controller";

const employeeRouter = Router();
const createEmployeeController = new CreateEmployeeController();
const deleteEmployeeController = new DeleteEmployeeController();
const updateEmployeeController = new UpdateEmployeeController();
const listEmployeesController = new ListEmployeesController();

employeeRouter.post("/", createEmployeeController.handler);
employeeRouter.delete("/", deleteEmployeeController.handler);
employeeRouter.put("/", updateEmployeeController.handler);
employeeRouter.get("/", listEmployeesController.handler);

export { employeeRouter };

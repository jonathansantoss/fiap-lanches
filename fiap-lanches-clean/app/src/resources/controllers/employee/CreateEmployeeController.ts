import { Request, Response } from "express";
import { ICreateEmployeeService } from "../../../services/interfaces/employee/ICreateEmployeeService";
import { CreateEmployeeService } from "../../../services/impl/employee/CreateEmployeeService";
import { container } from "../../../configurations/InjectionDependency"

class CreateEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createEmployeeService: ICreateEmployeeService = container.resolve(
      CreateEmployeeService
    );

    await createEmployeeService.execute(request.body);

    return response.status(200).send("Employee created successfully");
  }
}

export { CreateEmployeeController };

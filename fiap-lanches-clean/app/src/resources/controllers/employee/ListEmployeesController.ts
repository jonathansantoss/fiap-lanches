import { Request, Response } from "express";
import { ListEmployeesService } from "../../../services/impl/employee/ListEmployeesService";
import { IListEmployeesService } from "../../../services/interfaces/employee/IListEmployeesService";
import { container } from "../../../configurations/InjectionDependency";

class ListEmployeesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listEmployeesService: IListEmployeesService = container.resolve(
      ListEmployeesService
    );

    const employees = await listEmployeesService.execute();

    return response.status(200).send(employees);
  }
}

export { ListEmployeesController };
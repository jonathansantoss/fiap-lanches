import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { ListEmployeesUseCase } from "../../../../core/applications/usecases/employee/ListEmployeesUseCase";
import { IListEmployeesUseCase } from "../../../../core/applications/ports/in/employee/IListEmployeesUseCase";

class ListEmployeesController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listEmployeesUseCase: IListEmployeesUseCase = container.resolve(
      ListEmployeesUseCase
    );

    const employees = await listEmployeesUseCase.execute();

    return response.status(200).send(employees);
  }
}

export { ListEmployeesController };
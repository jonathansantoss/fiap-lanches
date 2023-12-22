import { Request, Response } from "express";
import { IFindByCpfEmployeeService } from "../../../services/interfaces/employee/IFindByCpfEmployeeService";
import { IUpdateEmployeeService } from "../../../services/interfaces/employee/IUpdateEmployeeService";
import { UpdateEmployeeService } from "../../../services/impl/employee/UpdateEmployeeService";
import { FindByCpfEmployeeService } from "../../../services/impl/employee/FindByCpfEmployeeService";
import { container } from "../../../configurations/InjectionDependency";

class UpdateEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const updateEmployeeService: IUpdateEmployeeService = container.resolve(
      UpdateEmployeeService
    );

    const findByCpfEmployeeService: IFindByCpfEmployeeService =
      container.resolve(FindByCpfEmployeeService);

    const employee = await findByCpfEmployeeService.execute(cpf);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await updateEmployeeService.execute(request.body);

    return response.status(200).send("Employee updated successfully");
  }
}

export { UpdateEmployeeController };

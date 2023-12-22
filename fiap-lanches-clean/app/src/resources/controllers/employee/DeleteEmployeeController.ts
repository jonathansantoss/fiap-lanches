import { Request, Response } from "express";
import { IFindByCpfEmployeeService } from "../../../services/interfaces/employee/IFindByCpfEmployeeService";
import { IDeleteEmployeeService } from "../../../services/interfaces/employee/IDeleteEmployeeService";
import { DeleteEmployeeService } from "../../../services/impl/employee/DeleteEmployeeService";
import { FindByCpfEmployeeService } from "../../../services/impl/employee/FindByCpfEmployeeService";
import { container } from "../../../configurations/InjectionDependency"

class DeleteEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const deleteEmployeeService: IDeleteEmployeeService = container.resolve(
      DeleteEmployeeService
    );

    const findByCpfEmployeeService: IFindByCpfEmployeeService =
      container.resolve(FindByCpfEmployeeService);

    const employee = await findByCpfEmployeeService.execute(cpf);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await deleteEmployeeService.execute(cpf);

    return response.status(200).send("Employee deleted successfully");
  }
}

export { DeleteEmployeeController };

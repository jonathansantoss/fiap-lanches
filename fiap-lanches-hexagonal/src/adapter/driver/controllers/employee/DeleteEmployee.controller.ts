import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { DeleteEmployeeUseCase } from "../../../../core/applications/usecases/employee/DeleteEmployeeUseCase";
import { IDeleteEmployeeUseCase } from "../../../../core/applications/ports/in/employee/IDeleteEmployeeUseCase";
import { FindByCpfEmployeeUseCase } from "../../../../core/applications/usecases/employee/FindByCpfEmployeeUseCase";
import { IFindByCpfEmployeeUseCase } from "../../../../core/applications/ports/in/employee/IFindByCpfEmployeeUseCase";

class DeleteEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const deleteEmployeeUseCase: IDeleteEmployeeUseCase = container.resolve(
      DeleteEmployeeUseCase
    );

    const findByCpfEmployeeUseCase: IFindByCpfEmployeeUseCase =
      container.resolve(FindByCpfEmployeeUseCase);

    const employee = await findByCpfEmployeeUseCase.execute(cpf);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await deleteEmployeeUseCase.execute(cpf);

    return response.status(200).send("Employee deleted successfully");
  }
}

export { DeleteEmployeeController };

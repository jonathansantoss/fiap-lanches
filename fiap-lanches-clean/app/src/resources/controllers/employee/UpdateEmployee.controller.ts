import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { UpdateEmployeeUseCase } from "../../../../core/applications/usecases/employee/UpdateEmployeeUseCase";
import { IUpdateEmployeeUseCase } from "../../../../core/applications/ports/in/employee/IUpdateEmployeeUseCase";
import { FindByCpfEmployeeUseCase } from "../../../../core/applications/usecases/employee/FindByCpfEmployeeUseCase";
import { IFindByCpfEmployeeUseCase } from "../../../../core/applications/ports/in/employee/IFindByCpfEmployeeUseCase";

class UpdateEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const updateEmployeeUseCase: IUpdateEmployeeUseCase = container.resolve(
      UpdateEmployeeUseCase
    );

    const findByCpfEmployeeUseCase: IFindByCpfEmployeeUseCase =
      container.resolve(FindByCpfEmployeeUseCase);

    const employee = await findByCpfEmployeeUseCase.execute(cpf);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await updateEmployeeUseCase.execute(request.body);

    return response.status(200).send("Employee updated successfully");
  }
}

export { UpdateEmployeeController };

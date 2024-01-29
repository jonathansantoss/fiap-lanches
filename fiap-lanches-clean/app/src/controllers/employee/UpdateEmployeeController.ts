import { Request, Response } from "express";
import { FindByCpfEmployeeService } from "../../useCases/impl/employee/FindByCpfEmployeeService";
import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { DeleteEmployeeService } from "../../useCases/impl/employee/DeleteEmployeeService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { UpdateEmployeeService } from "../../useCases/impl/employee/UpdateEmployeeService";

class UpdateEmployeeController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }


  handler = async (request: Request, response: Response): Promise<Response> => {
    const findByCpfEmployeeService = new FindByCpfEmployeeService();
    const updateEmployeeService = new UpdateEmployeeService();
    const employeeRepository = new EmployeeRepository(this.dataSource);

    const { cpf } = request.body;

    const employee = await findByCpfEmployeeService.execute(cpf, employeeRepository);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await updateEmployeeService.execute(request.body, employeeRepository);

    return response.status(200).send("Employee updated successfully");
  }
}

export { UpdateEmployeeController };

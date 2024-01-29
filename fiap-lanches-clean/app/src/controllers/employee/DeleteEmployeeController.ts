import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { FindByCpfEmployeeService } from "../../useCases/impl/employee/FindByCpfEmployeeService";
import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { DeleteEmployeeService } from "../../useCases/impl/employee/DeleteEmployeeService";

class DeleteEmployeeController {

  public dataSource: IDataSource;

  constructor (dataSource: IDataSource){
    this.dataSource = dataSource;
  }


  handler = async (request: Request, response: Response): Promise<Response> => {
    const findByCpfEmployeeService = new FindByCpfEmployeeService();
    const deleteEmployeeService = new DeleteEmployeeService();
    const employeeRepository = new EmployeeRepository(this.dataSource);

    const { cpf } = request.params;

    const employee = findByCpfEmployeeService.execute(cpf, employeeRepository);

    if (!employee) {
      return response.status(404).send("Nout found employee!");
    }

    await deleteEmployeeService.execute(cpf, employeeRepository);

    return response.status(200).send("Employee deleted successfully");
  }
}

export { DeleteEmployeeController };

import { Request, Response } from "express";
import { ListEmployeesService } from "../../useCases/impl/employee/ListEmployeesService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";


class ListEmployeesController {

  public dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  handler = async (request: Request, response: Response): Promise<Response> => {
    const employeeRepository = new EmployeeRepository(this.dataSource);
    const listEmployeesService = new ListEmployeesService();

    const employees = await listEmployeesService.execute(employeeRepository);

    return response.status(200).send(employees);
  }
}

export { ListEmployeesController };
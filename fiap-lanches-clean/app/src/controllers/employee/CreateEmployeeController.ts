import { Request, Response } from "express";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { CreateEmployeeService } from "../../useCases/impl/employee/CreateEmployeeService";

class CreateEmployeeController {

  public dataSource: IDataSource;

  constructor (dataSource: IDataSource){
    this.dataSource = dataSource;
  }


  handler = async (request: Request, response: Response): Promise<Response> => {
    const employeeRepository = new EmployeeRepository(this.dataSource);
    const createEmployeeService = new CreateEmployeeService();

    await createEmployeeService.execute(request.body, employeeRepository);
    return response.status(200).send("Employee created successfully");
  }
}

export { CreateEmployeeController };

import "reflect-metadata";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { ICreateEmployeeService } from "../../interfaces/employee/ICreateEmployeeService";

class CreateEmployeeService implements ICreateEmployeeService {

  async execute(employee: IEmployee, employeeRepository: IEmployeeRepository): Promise<void> {
    await employeeRepository.save(employee);
  }
}

export { CreateEmployeeService };

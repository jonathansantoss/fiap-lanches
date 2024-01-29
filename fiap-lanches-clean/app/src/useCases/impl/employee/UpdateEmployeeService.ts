import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IUpdateEmployeeService } from "../../interfaces/employee/IUpdateEmployeeService";

class UpdateEmployeeService implements IUpdateEmployeeService {


  async execute(employee: IEmployee, employeeRepository: IEmployeeRepository): Promise<void> {
    await employeeRepository.update(employee);
  }
}

export { UpdateEmployeeService };

import { IEmployee } from "../../../domain/models/IEmployeeModel"
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";

interface IUpdateEmployeeService {
  execute(employee: IEmployee, employeeRepository: IEmployeeRepository): Promise<void>;
}

export { IUpdateEmployeeService };

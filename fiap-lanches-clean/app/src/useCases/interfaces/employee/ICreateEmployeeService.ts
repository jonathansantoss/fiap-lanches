import { IEmployee } from "../../../domain/models/IEmployeeModel"

interface ICreateEmployeeService {
  execute(employee: IEmployee, employeeRepository: IEmployeeRepository): Promise<void>;
}

export { ICreateEmployeeService };

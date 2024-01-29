import { IEmployee } from "../../../domain/models/IEmployeeModel"
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";

interface IListEmployeesService {
  execute(employeeRepository: IEmployeeRepository): Promise<IEmployee[]>;
}

export { IListEmployeesService };

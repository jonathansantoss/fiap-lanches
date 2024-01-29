import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IListEmployeesService } from "../../interfaces/employee/IListEmployeesService";

class ListEmployeesService implements IListEmployeesService {

  async execute(employeeRepository: IEmployeeRepository): Promise<IEmployee[]> {
    return await employeeRepository.getAll();
  }
}

export { ListEmployeesService };

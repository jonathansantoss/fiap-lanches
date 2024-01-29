import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IDeleteEmployeeService } from "../../interfaces/employee/IDeleteEmployeeService";


class DeleteEmployeeService implements IDeleteEmployeeService {

  async execute(cpf: string, employeeRepository: IEmployeeRepository): Promise<void> {
    await employeeRepository.delete(cpf);
  }
}

export { DeleteEmployeeService };

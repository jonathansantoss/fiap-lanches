import { IEmployee } from "../../../domain/models/IEmployeeModel"
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";

interface IFindByCpfEmployeeService {
  execute(cpf: string, employeeRepository: IEmployeeRepository): Promise<IEmployee>;
}

export { IFindByCpfEmployeeService };

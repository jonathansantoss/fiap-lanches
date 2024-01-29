import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";

interface IDeleteEmployeeService {
  execute(cpf: string, employeeRepository: IEmployeeRepository): Promise<void>;
}

export { IDeleteEmployeeService };

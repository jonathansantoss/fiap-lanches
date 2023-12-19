import { IEmployee } from "../../../domain/models/IEmployeeModel"

interface IFindByCpfEmployeeService {
  execute(cpf: string): Promise<IEmployee>;
}

export { IFindByCpfEmployeeService };

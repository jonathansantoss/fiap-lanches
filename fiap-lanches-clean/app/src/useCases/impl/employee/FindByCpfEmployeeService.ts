import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IFindByCpfEmployeeService } from "../../interfaces/employee/IFindByCpfEmployeeService";

@injectable()
class FindByCpfEmployeeService implements IFindByCpfEmployeeService {

  async execute(cpf: string, employeeRepository: IEmployeeRepository): Promise<IEmployee> {
    return await employeeRepository.findByCpf(cpf);
  }
}

export { FindByCpfEmployeeService };

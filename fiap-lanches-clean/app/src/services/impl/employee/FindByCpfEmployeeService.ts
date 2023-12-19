import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IFindByCpfEmployeeService } from "../../interfaces/employee/IFindByCpfEmployeeService";

@injectable()
class FindByCpfEmployeeService implements IFindByCpfEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(cpf: string): Promise<IEmployee> {
    return await this.employeeRepository.findByCpf(cpf);
  }
}

export { FindByCpfEmployeeService };

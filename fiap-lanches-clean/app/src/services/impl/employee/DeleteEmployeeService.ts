import { inject, injectable } from "tsyringe";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IDeleteEmployeeService } from "../../interfaces/employee/IDeleteEmployeeService";


@injectable()
class DeleteEmployeeService implements IDeleteEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    await this.employeeRepository.delete(cpf);
  }
}

export { DeleteEmployeeService };

import { inject, injectable } from "tsyringe";
import { IDeleteEmployeeUseCase } from "../../ports/in/employee/IDeleteEmployeeUseCase";
import { IEmployeeRepository } from "../../ports/out/employee/IEmployee.repository";

@injectable()
class DeleteEmployeeUseCase implements IDeleteEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(cpf: string): Promise<void> {
    await this.employeeRepository.delete(cpf);
  }
}

export { DeleteEmployeeUseCase };

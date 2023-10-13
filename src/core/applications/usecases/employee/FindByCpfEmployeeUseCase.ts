import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/entities/IEmployee";
import { IEmployeeRepository } from "../../ports/out/employee/IEmployee.repository";
import { IFindByCpfEmployeeUseCase } from "../../ports/in/employee/IFindByCpfEmployeeUseCase";

@injectable()
class FindByCpfEmployeeUseCase implements IFindByCpfEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(cpf: string): Promise<IEmployee> {
    return await this.employeeRepository.findByCpf(cpf);
  }
}

export { FindByCpfEmployeeUseCase };

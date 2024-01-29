import { IEmployee } from "../../../domain/entities/IEmployee";
import { inject, injectable } from "tsyringe";
import { IUpdateEmployeeUseCase } from "../../ports/in/employee/IUpdateEmployeeUseCase";
import { IEmployeeRepository } from "../../ports/out/employee/IEmployee.repository";

@injectable()
class UpdateEmployeeUseCase implements IUpdateEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(employee: IEmployee): Promise<void> {
    await this.employeeRepository.update(employee);
  }
}

export { UpdateEmployeeUseCase };

import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IUpdateEmployeeService } from "../../interfaces/employee/IUpdateEmployeeService";
@injectable()
class UpdateEmployeeService implements IUpdateEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(employee: IEmployee): Promise<void> {
    await this.employeeRepository.update(employee);
  }
}

export { UpdateEmployeeService };

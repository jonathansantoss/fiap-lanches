import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/entities/IEmployee";
import { IListEmployeesUseCase } from "../../ports/in/employee/IListEmployeesUseCase";
import { IEmployeeRepository } from "../../ports/out/employee/IEmployee.repository";

@injectable()
class ListEmployeesUseCase implements IListEmployeesUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(): Promise<IEmployee[]> {
    return await this.employeeRepository.getAll();
  }
}

export { ListEmployeesUseCase };

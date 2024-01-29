import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/entities/IEmployee";
import { ICreateEmployeeUseCase } from "../../ports/in/employee/ICreateEmployeeUseCase";
import { IEmployeeRepository } from "../../ports/out/employee/IEmployee.repository";

@injectable()
class CreateEmployeeUseCase implements ICreateEmployeeUseCase {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(employee: IEmployee): Promise<void> {
    await this.employeeRepository.save(employee);
  }
}

export { CreateEmployeeUseCase };

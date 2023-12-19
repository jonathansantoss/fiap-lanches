import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { ICreateEmployeeService } from "../../interfaces/employee/ICreateEmployeeService";

@injectable()
class CreateEmployeeService implements ICreateEmployeeService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(employee: IEmployee): Promise<void> {
    await this.employeeRepository.save(employee);
  }
}

export { CreateEmployeeService };

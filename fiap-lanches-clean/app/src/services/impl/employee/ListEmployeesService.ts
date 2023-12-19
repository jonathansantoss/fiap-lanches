import { inject, injectable } from "tsyringe";
import { IEmployee } from "../../../domain/models/IEmployeeModel";
import { IEmployeeRepository } from "../../../repositories/interfaces/IEmployeeRepository";
import { IListEmployeesService } from "../../interfaces/employee/IListEmployeesService";

@injectable()
class ListEmployeesService implements IListEmployeesService {
  constructor(
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(): Promise<IEmployee[]> {
    return await this.employeeRepository.getAll();
  }
}

export { ListEmployeesService };

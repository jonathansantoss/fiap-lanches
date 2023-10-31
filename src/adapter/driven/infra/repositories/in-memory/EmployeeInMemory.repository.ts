import { IEmployeeRepository } from "../../../../../core/applications/ports/out/employee/IEmployee.repository";
import { IEmployee } from "../../../../../core/domain/entities/IEmployee";

class EmployeeInMemoryRepository implements IEmployeeRepository {
  employees: IEmployee[] = [];

  async save(employee: IEmployee): Promise<void> {
    this.employees.push(employee);
  }

  async delete(cpf: string): Promise<void> {
    this.employees = await this.employees.filter(
      (employee) => employee.cpf !== cpf
    );
  }

  async update(employee: IEmployee): Promise<void> {
    this.employees = await this.employees.filter(
      (employee) => employee.cpf !== employee.cpf
    );
    await this.employees.push(employee);
  }

  async getAll(): Promise<IEmployee[]> {
    return this.employees;
  }

  async findByCpf(cpf: string): Promise<IEmployee> {
    return this.employees.find((employee) => employee.cpf === cpf);
  }
}

export { EmployeeInMemoryRepository };

import { IEmployeeRepository } from "../../../../core/applications/ports/out/employee/IEmployee.repository";
import { IEmployee } from "../../../../core/domain/entities/IEmployee";
import { AppDataSource } from "../../../../config/DataSource";
import { Employee } from "../../../data/Employee";
import { Repository } from "typeorm";

class EmployeeRepository implements IEmployeeRepository {
  private repository: Repository<Employee> =
    AppDataSource.getRepository(Employee);

  async save(employee: IEmployee): Promise<void> {
    const employeeCreated = this.repository.create(employee);
    await this.repository.save(employeeCreated);
  }

  async delete(cpf: string): Promise<void> {
    await this.repository.delete({
      cpf,
    });
  }

  async update(employee: IEmployee): Promise<void> {
    await this.repository.save(employee);
  }

  async getAll(): Promise<IEmployee[]> {
    return await this.repository.find();
  }

  async findByCpf(cpf: string): Promise<IEmployee> {
    return await this.repository.findOne({
      where: {
        cpf,
      },
    });
  }
}

export { EmployeeRepository };

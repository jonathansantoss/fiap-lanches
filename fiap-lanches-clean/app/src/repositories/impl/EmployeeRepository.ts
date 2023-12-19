import { IEmployeeRepository } from "../interfaces/IEmployeeRepository";
import { IEmployee } from "../../domain/models/IEmployeeModel";
import { Employee } from "../entity/EmployeeEntity";
import { AppDataSource } from "../../configurations/DataSource";
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

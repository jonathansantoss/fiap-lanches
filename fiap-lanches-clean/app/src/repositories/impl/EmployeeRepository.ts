import { IEmployeeRepository } from "../interfaces/IEmployeeRepository";
import { IEmployee } from "../../domain/models/IEmployeeModel";
import { IDataSource } from "../dataSource/IDataSource";

class EmployeeRepository implements IEmployeeRepository {

  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }

  async save(employee: IEmployee): Promise<void> {
    await this.dataSource.save(employee);
  }

  async delete(cpf: string): Promise<void> {
    await this.dataSource.deleteOneBy("cpf", cpf);
  }

  async update(employee: IEmployee): Promise<void> {
    await this.dataSource.save(employee);
  }

  async getAll(): Promise<IEmployee[]> {
    return await this.dataSource.findAll();
  }

  async findByCpf(cpf: string): Promise<IEmployee> {
    return await this.dataSource.findOneBy("cpf", cpf);
  }
}

export { EmployeeRepository };

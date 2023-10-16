import { EmployeeInMemoryRepository } from "../../adapter/driven/infra/repositories/in-memory/EmployeeInMemory.repository";
import { CreateEmployeeUseCase } from "../../core/applications/usecases/employee/CreateEmployeeUseCase";
import { ListEmployeesUseCase } from "../../core/applications/usecases/employee/ListEmployeesUseCase";
import { IEmployee } from "../../core/domain/entities/IEmployee";

let createEmployeeUseCase: CreateEmployeeUseCase;
let listEmployeesUseCase: ListEmployeesUseCase;
let employeeInMemoryRepository: EmployeeInMemoryRepository;

describe("List Employees", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeInMemoryRepository();
    createEmployeeUseCase = new CreateEmployeeUseCase(
      employeeInMemoryRepository
    );
    listEmployeesUseCase = new ListEmployeesUseCase(employeeInMemoryRepository);
  });

  it("Should be able to list all employees", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeUseCase.execute(employee);

    expect((await listEmployeesUseCase.execute()).length).toBe(1);
  });
});

import { EmployeeInMemoryRepository } from "../../adapter/driven/infra/repositories/in-memory/EmployeeInMemory.repository";
import { CreateEmployeeUseCase } from "../../core/applications/usecases/employee/CreateEmployeeUseCase";
import { DeleteEmployeeUseCase } from "../../core/applications/usecases/employee/DeleteEmployeeUseCase";
import { ListEmployeesUseCase } from "../../core/applications/usecases/employee/ListEmployeesUseCase";
import { IEmployee } from "../../core/domain/entities/IEmployee";

let createEmployeeUseCase: CreateEmployeeUseCase;
let listEmployeesUseCase: ListEmployeesUseCase;
let deleteEmployeeUseCase: DeleteEmployeeUseCase;
let employeeInMemoryRepository: EmployeeInMemoryRepository;

describe("Delete Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeInMemoryRepository();
    createEmployeeUseCase = new CreateEmployeeUseCase(
      employeeInMemoryRepository
    );
    deleteEmployeeUseCase = new DeleteEmployeeUseCase(
      employeeInMemoryRepository
    );
    listEmployeesUseCase = new ListEmployeesUseCase(employeeInMemoryRepository);
  });

  it("Should be able to delete an employee", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeUseCase.execute(employee);

    expect((await listEmployeesUseCase.execute()).length).toBe(1);

    await deleteEmployeeUseCase.execute("14034649011");

    expect((await listEmployeesUseCase.execute()).length).toBe(0);
  });
});

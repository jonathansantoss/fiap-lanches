import { EmployeeInMemoryRepository } from "../../adapter/driven/infra/repositories/in-memory/EmployeeInMemory.repository";
import { CreateEmployeeUseCase } from "../../core/applications/usecases/employee/CreateEmployeeUseCase";
import { FindByCpfEmployeeUseCase } from "../../core/applications/usecases/employee/FindByCpfEmployeeUseCase";
import { IEmployee } from "../../core/domain/entities/IEmployee";

let createEmployeeUseCase: CreateEmployeeUseCase;
let findByCpfEmployeeUseCase: FindByCpfEmployeeUseCase;
let employeeInMemoryRepository: EmployeeInMemoryRepository;

describe("Find Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeInMemoryRepository();
    createEmployeeUseCase = new CreateEmployeeUseCase(
      employeeInMemoryRepository
    );
    findByCpfEmployeeUseCase = new FindByCpfEmployeeUseCase(
      employeeInMemoryRepository
    );
  });

  it("Should be able to bring an employee by cpf", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeUseCase.execute(employee);

    expect(await findByCpfEmployeeUseCase.execute("14034649011")).toBe(
      employee
    );
  });
});

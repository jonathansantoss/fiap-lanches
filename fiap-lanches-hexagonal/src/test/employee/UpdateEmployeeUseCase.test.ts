import { EmployeeInMemoryRepository } from "../../adapter/driven/infra/repositories/in-memory/EmployeeInMemory.repository";
import { CreateEmployeeUseCase } from "../../core/applications/usecases/employee/CreateEmployeeUseCase";
import { FindByCpfEmployeeUseCase } from "../../core/applications/usecases/employee/FindByCpfEmployeeUseCase";
import { UpdateEmployeeUseCase } from "../../core/applications/usecases/employee/UpdateEmployeeUseCase";
import { IEmployee } from "../../core/domain/entities/IEmployee";

let createEmployeeUseCase: CreateEmployeeUseCase;
let findByCpfEmployeeUseCase: FindByCpfEmployeeUseCase;
let updateEmployeeUseCase: UpdateEmployeeUseCase;
let employeeInMemoryRepository: EmployeeInMemoryRepository;

describe("Update Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeInMemoryRepository();
    createEmployeeUseCase = new CreateEmployeeUseCase(
      employeeInMemoryRepository
    );
    findByCpfEmployeeUseCase = new FindByCpfEmployeeUseCase(
      employeeInMemoryRepository
    );
    updateEmployeeUseCase = new UpdateEmployeeUseCase(
      employeeInMemoryRepository
    );
  });

  it("Should be able to delete an employee", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeUseCase.execute(employee);

    expect(await findByCpfEmployeeUseCase.execute("14034649011")).toBe(
      employee
    );

    const employeeUpdate: IEmployee = {
      cpf: "14034649011",
      email: "shavonne789@gmail.com",
      name: "shavonne",
    };

    await updateEmployeeUseCase.execute(employeeUpdate);

    expect(await findByCpfEmployeeUseCase.execute("14034649011")).toBe(
      employeeUpdate
    );
  });
});

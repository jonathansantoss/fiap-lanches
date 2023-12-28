import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { CreateEmployeeService } from "../../services/impl/employee/CreateEmployeeService";
import { FindByCpfEmployeeService } from "../../services/impl/employee/FindByCpfEmployeeService";
import { IEmployee } from "../../domain/models/IEmployeeModel";

let createEmployeeService: CreateEmployeeService;
let findByCpfEmployeeService: FindByCpfEmployeeService;
let employeeInMemoryRepository: EmployeeRepository;

describe("Find Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeRepository();
    createEmployeeService = new CreateEmployeeService(
      employeeInMemoryRepository
    );
    findByCpfEmployeeService = new FindByCpfEmployeeService(
      employeeInMemoryRepository
    );
  });

  it("Should be able to bring an employee by cpf", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeService.execute(employee);

    expect(await findByCpfEmployeeService.execute("14034649011")).toBe(
      employee
    );
  });
});

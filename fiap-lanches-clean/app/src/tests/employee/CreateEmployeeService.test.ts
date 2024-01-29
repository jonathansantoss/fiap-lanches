import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { CreateEmployeeService } from "../../services/impl/employee/CreateEmployeeService";
import { ListEmployeesService } from "../../services/impl/employee/ListEmployeesService";
import { IEmployee } from "../../domain/models/IEmployeeModel";

let createEmployeeService: CreateEmployeeService;
let listEmployeesService: ListEmployeesService;
let employeeInMemoryRepository: EmployeeRepository;

describe("Create Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeRepository();
    createEmployeeService = new CreateEmployeeService(
      employeeInMemoryRepository
    );
    listEmployeesService = new ListEmployeesService(employeeInMemoryRepository);
  });

  it("Should be able to create a new employee", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeService.execute(employee);

    expect((await listEmployeesService.execute()).length).toBe(1);
  });
});

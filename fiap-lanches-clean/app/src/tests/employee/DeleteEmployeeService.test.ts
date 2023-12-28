import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { CreateEmployeeService } from "../../services/impl/employee/CreateEmployeeService";
import { DeleteEmployeeService } from "../../services/impl/employee/DeleteEmployeeService";
import { ListEmployeesService } from "../../services/impl/employee/ListEmployeesService";
import { IEmployee } from "../../domain/models/IEmployeeModel";

let createEmployeeService: CreateEmployeeService;
let listEmployeesService: ListEmployeesService;
let deleteEmployeeService: DeleteEmployeeService;
let employeeInMemoryRepository: EmployeeRepository;

describe("Delete Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeRepository();
    createEmployeeService = new CreateEmployeeService(
      employeeInMemoryRepository
    );
    deleteEmployeeService = new DeleteEmployeeService(
      employeeInMemoryRepository
    );
    listEmployeesService = new ListEmployeesService(employeeInMemoryRepository);
  });

  it("Should be able to delete an employee", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeService.execute(employee);

    expect((await listEmployeesService.execute()).length).toBe(1);

    await deleteEmployeeService.execute("14034649011");

    expect((await listEmployeesService.execute()).length).toBe(0);
  });
});

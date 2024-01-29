import { EmployeeRepository } from "../../repositories/impl/EmployeeRepository";
import { CreateEmployeeService } from "../../services/impl/employee/CreateEmployeeService";
import { FindByCpfEmployeeService } from "../../services/impl/employee/FindByCpfEmployeeService";
import { UpdateEmployeeService } from "../../services/impl/employee/UpdateEmployeeService";
import { IEmployee } from "../../domain/models/IEmployeeModel";

let createEmployeeService: CreateEmployeeService;
let findByCpfEmployeeService: FindByCpfEmployeeService;
let updateEmployeeService: UpdateEmployeeService;
let employeeInMemoryRepository: EmployeeRepository;

describe("Update Employee", () => {
  beforeEach(() => {
    employeeInMemoryRepository = new EmployeeRepository();
    createEmployeeService = new CreateEmployeeService(
      employeeInMemoryRepository
    );
    findByCpfEmployeeService = new FindByCpfEmployeeService(
      employeeInMemoryRepository
    );
    updateEmployeeService = new UpdateEmployeeService(
      employeeInMemoryRepository
    );
  });

  it("Should be able to delete an employee", async () => {
    const employee: IEmployee = {
      cpf: "14034649011",
      email: "shavonne755@gmail.com",
      name: "shavonne",
    };

    await createEmployeeService.execute(employee);

    expect(await findByCpfEmployeeService.execute("14034649011")).toBe(
      employee
    );

    const employeeUpdate: IEmployee = {
      cpf: "14034649011",
      email: "shavonne789@gmail.com",
      name: "shavonne",
    };

    await updateEmployeeService.execute(employeeUpdate);

    expect(await findByCpfEmployeeService.execute("14034649011")).toBe(
      employeeUpdate
    );
  });
});

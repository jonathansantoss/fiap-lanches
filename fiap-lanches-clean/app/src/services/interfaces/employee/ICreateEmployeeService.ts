import { IEmployee } from "../../../domain/models/IEmployeeModel"

interface ICreateEmployeeService {
  execute(employee: IEmployee): Promise<void>;
}

export { ICreateEmployeeService };

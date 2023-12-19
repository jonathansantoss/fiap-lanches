import { IEmployee } from "../../../domain/models/IEmployeeModel"

interface IUpdateEmployeeService {
  execute(employee: IEmployee): Promise<void>;
}

export { IUpdateEmployeeService };

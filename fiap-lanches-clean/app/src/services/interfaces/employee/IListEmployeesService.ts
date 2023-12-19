import { IEmployee } from "../../../domain/models/IEmployeeModel"

interface IListEmployeesService {
  execute(): Promise<IEmployee[]>;
}

export { IListEmployeesService };

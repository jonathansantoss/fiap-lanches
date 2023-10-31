import { IEmployee } from "../../../../domain/entities/IEmployee";

interface IListEmployeesUseCase {
  execute(): Promise<IEmployee[]>;
}

export { IListEmployeesUseCase };

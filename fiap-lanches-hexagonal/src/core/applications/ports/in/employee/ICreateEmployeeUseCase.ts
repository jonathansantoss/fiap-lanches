import { IEmployee } from "../../../../domain/entities/IEmployee";

interface ICreateEmployeeUseCase {
  execute(employee: IEmployee): Promise<void>;
}

export { ICreateEmployeeUseCase };

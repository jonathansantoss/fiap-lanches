import { IEmployee } from "../../../../domain/entities/IEmployee";

interface IUpdateEmployeeUseCase {
  execute(employee: IEmployee): Promise<void>;
}

export { IUpdateEmployeeUseCase };

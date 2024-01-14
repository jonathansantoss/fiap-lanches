import { IEmployee } from "../../../../domain/entities/IEmployee";

interface IFindByCpfEmployeeUseCase {
  execute(cpf: string): Promise<IEmployee>;
}

export { IFindByCpfEmployeeUseCase };

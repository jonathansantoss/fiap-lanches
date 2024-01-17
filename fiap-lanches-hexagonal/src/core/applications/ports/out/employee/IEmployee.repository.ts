import { IEmployee } from "../../../../domain/entities/IEmployee";

interface IEmployeeRepository  {
    save(employee: IEmployee): Promise<void>;
    delete(cpf: string): Promise<void>;
    update(employee: IEmployee): Promise<void>;
    getAll(): Promise<IEmployee[]>;
    findByCpf(cpf: string): Promise<IEmployee>;
}

export { IEmployeeRepository };

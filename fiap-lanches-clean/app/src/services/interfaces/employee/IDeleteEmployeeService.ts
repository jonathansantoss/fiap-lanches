interface IDeleteEmployeeService {
  execute(cpf: string): Promise<void>;
}

export { IDeleteEmployeeService };

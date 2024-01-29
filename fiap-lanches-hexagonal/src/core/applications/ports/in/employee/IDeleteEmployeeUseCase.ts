interface IDeleteEmployeeUseCase {
  execute(cpf: string): Promise<void>;
}

export { IDeleteEmployeeUseCase };

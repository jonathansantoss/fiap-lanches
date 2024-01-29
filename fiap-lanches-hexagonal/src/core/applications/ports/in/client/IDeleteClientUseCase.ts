interface IDeleteClientUseCase {
  execute(cpf: string): Promise<void>;
}

export { IDeleteClientUseCase };

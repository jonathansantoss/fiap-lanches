interface IDeleteClientService {
  execute(cpf: string): Promise<void>;
}

export { IDeleteClientService };

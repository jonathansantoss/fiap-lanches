class CustomError extends Error {
    status = null;

    constructor(message, status) {
      super(message); // Chama o construtor da classe Error com a mensagem de erro
      this.status = status; // Define o atributo status
    }
  }

  export { CustomError }
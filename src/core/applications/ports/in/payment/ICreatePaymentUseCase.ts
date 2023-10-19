interface ICreatePaymentUseCase {
  execute(orderid: string): Promise<void>;
}

export { ICreatePaymentUseCase };

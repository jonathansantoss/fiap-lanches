interface IUpdatePaymentUseCase {
  execute(orderid: string): Promise<void>;
}

export { IUpdatePaymentUseCase };

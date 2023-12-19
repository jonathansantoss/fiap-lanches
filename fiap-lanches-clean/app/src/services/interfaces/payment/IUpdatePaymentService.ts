interface IUpdatePaymentService {
  execute(orderid: string): Promise<void>;
}

export { IUpdatePaymentService };

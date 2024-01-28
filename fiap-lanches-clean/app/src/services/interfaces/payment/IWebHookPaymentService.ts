interface IWebHookPaymentService {
    execute(statusCode: number, orderId: string): Promise<string>;
  }
  
  export { IWebHookPaymentService };
  
interface IGetPaymentStatusByOrderIdService {
    execute(orderid: string): Promise<object>;
  }
  
  export { IGetPaymentStatusByOrderIdService };
  
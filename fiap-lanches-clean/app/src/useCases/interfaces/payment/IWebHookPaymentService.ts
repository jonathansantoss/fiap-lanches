import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../order/IGetOrderByIdService";

interface IWebHookPaymentService {
    execute(statusCode: number, orderId: string, getOrderByIdUseCase: IGetOrderByIdService, orderRepository: IOrderRepository): Promise<string>;
  }
  
  export { IWebHookPaymentService };
  
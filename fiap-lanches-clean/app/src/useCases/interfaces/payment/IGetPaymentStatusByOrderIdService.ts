import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../order/IGetOrderByIdService";

interface IGetPaymentStatusByOrderIdService {
    execute(orderid: string, getOrderByIdUseCase: IGetOrderByIdService, orderRepository: IOrderRepository): Promise<object>;
  }
  
  export { IGetPaymentStatusByOrderIdService };
  
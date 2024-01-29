import { inject, injectable } from "tsyringe";
import { IGetPaymentStatusByOrderIdService } from "../../interfaces/payment/IGetPaymentStatusByOrderIdService";
import { CustomError } from "../../../domain/exceptions/Exceptions";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";
import { IOrderRepository } from "../../../repositories/interfaces/IOrderRepository";

@injectable()
class GetPaymentStatusByOrderIdService implements IGetPaymentStatusByOrderIdService {

    async execute(orderId: string, getOrderByIdUseCase: IGetOrderByIdService, orderRepository: IOrderRepository): Promise<object> {
        const order: IOrder = await getOrderByIdUseCase.execute(orderId, orderRepository).then(resp => {
            return resp
        });

        if (!order) {
            throw new CustomError(`Order ${orderId} not found`, 404)
        }

        return {
            order: order.id,
            paymentStatus: order.payment
        }
    }
}

export { GetPaymentStatusByOrderIdService };

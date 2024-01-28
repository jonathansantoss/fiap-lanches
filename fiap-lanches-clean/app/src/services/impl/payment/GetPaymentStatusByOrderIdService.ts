import { inject, injectable } from "tsyringe";
import { IGetPaymentStatusByOrderIdService } from "../../interfaces/payment/IGetPaymentStatusByOrderIdService";
import { CustomError } from "../../exceptions/Exceptions";
import { IOrder } from "../../../domain/models/IOrderModel";
import { IGetOrderByIdService } from "../../interfaces/order/IGetOrderByIdService";

@injectable()
class GetPaymentStatusByOrderIdService implements IGetPaymentStatusByOrderIdService {
    constructor(
        @inject("GetOrderByIdService") private getOrderByIdUseCase: IGetOrderByIdService,
        ) { }

    async execute(orderId: string): Promise<object> {
        const order: IOrder = await this.getOrderByIdUseCase.execute(orderId).then(resp => {
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

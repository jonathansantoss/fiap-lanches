import { Request, Response } from "express";
import { EOrderStatus } from "../../../domain/enums/EOrderStatus";
import { IUpdateOrderStatusService } from "../../../services/interfaces/order/IUpdateOrderStatusService";
import { UpdateOrderStatusService } from "../../../services/impl/order/UpdateOrderStatusService";
import { container } from "../../../configurations/InjectionDependency";
import { logger } from "../../../configurations/WinstonLog";

class UpdateOrderStatusController {
    async handler(request: Request, response: Response) {
        const updateOrderStatus: IUpdateOrderStatusService =
            container.resolve<IUpdateOrderStatusService>(UpdateOrderStatusService);

        await updateOrderStatus.execute(request.query.id as string, request.query.status as EOrderStatus).then(resp => {
            response.status(200).send({ "message": "Order updated", "orderId": resp });
        }
        ).catch(error => {
            logger.error(`Put order status: ${error.message}`)
            response.status(error.status ? error.status : 500).send({ "error": error.message })
        })
    }
}

export { UpdateOrderStatusController };

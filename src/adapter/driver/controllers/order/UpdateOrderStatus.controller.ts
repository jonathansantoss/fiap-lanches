import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { logger } from '../../../../config/WinstonLog';
import { IUpdateOrderStatusUseCase } from "../../../../core/applications/ports/in/order/IUpdateOrderStatusUseCase";
import { UpdateOrderStatusUseCase } from "../../../../core/applications/usecases/order/UpdateOrderStatusUseCase";
import { EOrderStatus } from "../../../../core/domain/enums/EOrderStatus";

class UpdateOrderStatusController {
    async handler(request: Request, response: Response) {
        const updateOrderStatus: IUpdateOrderStatusUseCase =
            container.resolve<IUpdateOrderStatusUseCase>(UpdateOrderStatusUseCase);

        await updateOrderStatus.execute(request.query.id as string, request.query.status as EOrderStatus).then(resp => {
            response.status(200).send({ "message": "Order updated", "orderId": resp });
        }
        ).catch(error => {
            logger.error(`Post product: ${error.message}`)
            error.status ? response.status(error.status).send({ "error": error.message }) : response.status(500).send({ "error": error.message });
        })
    }
}

export { UpdateOrderStatusController };

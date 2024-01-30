import { Request, Response } from "express";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { UpdateOrderStatusService } from "../../useCases/impl/order/UpdateOrderStatusService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { ILogger } from "../../configurations/Logger/ILogger";

class UpdateOrderStatusController {

    public dataSource: IDataSource;
    public logger: ILogger;

    constructor(dataSource: IDataSource, logger: ILogger) {
        this.dataSource = dataSource;
        this.logger = logger
    }

    handler = async (request: Request, response: Response) => {
        const orderRepository = new OrderRepository(this.dataSource);
        const getOrderByIdService = new GetOrderByIdService();
        const updateOrderStatus = new UpdateOrderStatusService();

        await updateOrderStatus.execute(request.query.id as string, request.query.status as EOrderStatus, orderRepository, getOrderByIdService).then(resp => {
            response.status(200).send({ "message": "Order updated", "orderId": resp });
        }
        ).catch(error => {
            this.logger.error(`Put order status: ${error.message}`)
            response.status(error.status ? error.status : 500).send({ "error": error.message })
        })
    }
}

export { UpdateOrderStatusController };

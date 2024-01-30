import { Request, Response } from "express";
import { GetPaymentStatusByOrderIdService } from "../../useCases/impl/payment/GetPaymentStatusByOrderIdService";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { ILogger } from "../../configurations/Logger/ILogger";

class GetPaymentStatusByOrderIdController {

    public dataSourceOrder: IDataSource;
    public logger: ILogger;

    constructor(dataSourceOrder: IDataSource, logger: ILogger) {
        this.dataSourceOrder = dataSourceOrder;
        this.logger = logger;
    }


    handler = async (request: Request, response: Response) => {
        const getPaymentStatusByOrderId = new GetPaymentStatusByOrderIdService();
        const getOrderByIdService = new GetOrderByIdService();
        const orderRepository = new OrderRepository(this.dataSourceOrder);

        getPaymentStatusByOrderId.execute(request.query.orderId as string, getOrderByIdService, orderRepository).then(resp => {
            response.status(200).send({ "message": `Payment status recovered`, "order": resp })
        }).catch(error => {
            this.logger.error(`Webhook payment error: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPaymentStatusByOrderIdController };

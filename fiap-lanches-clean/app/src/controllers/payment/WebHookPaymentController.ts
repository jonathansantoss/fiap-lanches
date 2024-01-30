import { Request, Response } from "express";
import { WebHookPaymentService } from "../../useCases/impl/payment/WebHookPaymentService";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";
import { ILogger } from "../../configurations/Logger/ILogger";

class WebHookPaymentController {

  public dataSourceOrder: IDataSource;
  public logger: ILogger;

  constructor(dataSourceOrder: IDataSource, logger: ILogger) {
    this.dataSourceOrder = dataSourceOrder;
    this.logger = logger;
  }

  handler = async (request: Request, response: Response) => {
    const webHookPaymentService = new WebHookPaymentService();
    const getOrderByIdService = new GetOrderByIdService();
    const orderRepository = new OrderRepository(this.dataSourceOrder);

    webHookPaymentService.execute(request.body.statusCode, request.body.payment.order, getOrderByIdService, orderRepository).then(resp => {
      response.status(200).send({ "message": `Order payment processed'}`, "orderId": request.body.payment.order })
    }).catch(error => {
      this.logger.error(`Webhook payment error: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { WebHookPaymentController };

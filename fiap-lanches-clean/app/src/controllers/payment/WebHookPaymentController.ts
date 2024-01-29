import { Request, Response } from "express";
import { logger } from "../../configurations/WinstonLog";
import { WebHookPaymentService } from "../../useCases/impl/payment/WebHookPaymentService";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";

class WebHookPaymentController {

  public dataSourceOrder: IDataSource;

  constructor(dataSourceOrder: IDataSource) {
    this.dataSourceOrder = dataSourceOrder;
  }

  handler = async (request: Request, response: Response) => {
    const webHookPaymentService = new WebHookPaymentService();
    const getOrderByIdService = new GetOrderByIdService();
    const orderRepository = new OrderRepository(this.dataSourceOrder);

    webHookPaymentService.execute(request.body.statusCode, request.body.payment.order, getOrderByIdService, orderRepository).then(resp => {
      response.status(200).send({ "message": `Order payment processed'}`, "orderId": request.body.payment.order })
    }).catch(error => {
      logger.error(`Webhook payment error: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { WebHookPaymentController };

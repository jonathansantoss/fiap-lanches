import { Request, Response } from "express";
import { container } from "../../../configurations/InjectionDependency";
import { IWebHookPaymentService } from "../../../services/interfaces/payment/IWebHookPaymentService";
import { WebHookPaymentService } from "../../../services/impl/payment/WebHookPaymentService";
import { logger } from "../../../configurations/WinstonLog";

class WebHookPaymentController {

  async handler(request: Request, response: Response) {
    const webHookPaymentService: IWebHookPaymentService =
      container.resolve<IWebHookPaymentService>(WebHookPaymentService);

    webHookPaymentService.execute(request.body.statusCode, request.body.payment.order).then(resp => {
      response.status(200).send({ "message": `Order payment processed'}`, "orderId": request.body.payment.order })
    }).catch(error => {
      logger.error(`Webhook payment error: ${error.message}`)
      response.status(500).send({ "error": error.message });
    })
  }
}

export { WebHookPaymentController };

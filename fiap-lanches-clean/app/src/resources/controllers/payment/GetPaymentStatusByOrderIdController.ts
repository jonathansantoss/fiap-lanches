import { Request, Response } from "express";
import { container } from "../../../configurations/InjectionDependency";
import { IWebHookPaymentService } from "../../../services/interfaces/payment/IWebHookPaymentService";
import { WebHookPaymentService } from "../../../services/impl/payment/WebHookPaymentService";
import { logger } from "../../../configurations/WinstonLog";
import { IGetPaymentStatusByOrderIdService } from "../../../services/interfaces/payment/IGetPaymentStatusByOrderIdService";
import { GetPaymentStatusByOrderIdService } from "../../../services/impl/payment/GetPaymentStatusByOrderIdService";

class GetPaymentStatusByOrderIdController {

    async handler(request: Request, response: Response) {
        const getPaymentStatusByOrderId: IGetPaymentStatusByOrderIdService =
            container.resolve<IGetPaymentStatusByOrderIdService>(GetPaymentStatusByOrderIdService);

        getPaymentStatusByOrderId.execute(request.query.orderId as string).then(resp => {
            response.status(200).send({ "message": `Payment status recovered`, "order": resp })
        }).catch(error => {
            logger.error(`Webhook payment error: ${error.message}`)
            response.status(500).send({ "error": error.message });
        })
    }
}

export { GetPaymentStatusByOrderIdController };

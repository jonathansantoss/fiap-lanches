import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetOrderByIdService } from "../../useCases/impl/order/GetOrderByIdService";
import { UpdatePaymentService } from "../../useCases/impl/payment/UpdatePaymentService";
import { IGetOrderByIdService } from "../../useCases/interfaces/order/IGetOrderByIdService";
import { IUpdatePaymentService } from "../../useCases/interfaces/payment/IUpdatePaymentService";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { IDataSource } from "../../repositories/dataSource/IDataSource";

class UpdatePaymentController {


  public dataSourceOrder: IDataSource;

  constructor(dataSourceOrder: IDataSource) {
    this.dataSourceOrder = dataSourceOrder;
  }


  handler = async (request: Request, response: Response): Promise<Response> => {
    const orderId: string = request.query.orderId as string;

    const orderRepository = new OrderRepository(this.dataSourceOrder);

    const updatePaymentService = new UpdatePaymentService();
    const getOrderByIdService = new GetOrderByIdService();

    const order = await getOrderByIdService.execute(orderId, orderRepository);

    if (!order) {
      return response.status(404).send("Nout found order!");
    }

    await updatePaymentService.execute(orderId, orderRepository);

    return response.status(200).send("updated status payment of order!");
  }
}

export { UpdatePaymentController };

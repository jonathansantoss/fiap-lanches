import "reflect-metadata";
import { EOrderPayment } from "../../domain/enums/EPayment";
import { OrderRepository } from "../../repositories/impl/OrderRepository";
import { UpdatePaymentService } from "../../services/impl/payment/UpdatePaymentService";

let updatePaymentService: UpdatePaymentService;
let orderInMemoryRepository: OrderRepository;

describe("UpdatePaymentService", () => {
  beforeEach(() => {
    orderInMemoryRepository = new OrderRepository();
    orderInMemoryRepository.saveOrUpdate({
      client: null,
      deliveredAt: new Date(Date.now()),
      products: [],
      startedAt: new Date(Date.now()),
      status: null,
      value: 10,
      id: "c739f5d0-c51e-48dd-ba99-24c41d5a80e1",
      payment: EOrderPayment.WAITING,
    });

    updatePaymentService = new UpdatePaymentService(orderInMemoryRepository);
  });

  it("should update status payment for approved", async () => {
    const order = await orderInMemoryRepository.getById(
      "c739f5d0-c51e-48dd-ba99-24c41d5a80e1"
    );
    expect(order.payment).toBe(EOrderPayment.WAITING);

    await updatePaymentService.execute("c739f5d0-c51e-48dd-ba99-24c41d5a80e1");

    expect(order.payment).toBe(EOrderPayment.APPROVED);
  });
});

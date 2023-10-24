import "reflect-metadata";
import { UpdatePaymentUseCase } from "../../core/applications/usecases/payment/UpdatePaymentUseCase";
import { OrderInMemoryRepository } from "../../adapter/driven/infra/repositories/in-memory/OrderInMemory.repository";
import { EOrderPayment } from "../../core/domain/enums/EPayment";

let updatePaymentUseCase: UpdatePaymentUseCase;
let orderInMemoryRepository: OrderInMemoryRepository;

describe("UpdatePaymentUseCase", () => {
  beforeEach(() => {
    orderInMemoryRepository = new OrderInMemoryRepository();
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

    updatePaymentUseCase = new UpdatePaymentUseCase(orderInMemoryRepository);
  });

  it("should update status payment for approved", async () => {
    const order = await orderInMemoryRepository.getById(
      "c739f5d0-c51e-48dd-ba99-24c41d5a80e1"
    );
    expect(order.payment).toBe(EOrderPayment.WAITING);

    await updatePaymentUseCase.execute("c739f5d0-c51e-48dd-ba99-24c41d5a80e1");

    expect(order.payment).toBe(EOrderPayment.APPROVED);
  });
});

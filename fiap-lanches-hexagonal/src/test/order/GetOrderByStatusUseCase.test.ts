import "reflect-metadata"
import { IOrderRepository } from "../../core/applications/ports/out/order/IOrder.repository";
import { GetOrderByIdUseCase } from "../../core/applications/usecases/order/GetOrderByIdUseCase";
import { EOrderStatus } from "../../core/domain/enums/EOrderStatus";
import { IOrder } from "../../core/domain/entities/IOrder.entity";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { IClient } from "../../core/domain/entities/IClient.entity";
import { GetOrderByStatusUseCase } from "../../core/applications/usecases/order/GetOrderByStatusUseCase";

describe("GetOrderByIdUseCase", () => {
    let getOrderByStatus: GetOrderByStatusUseCase;

    const product: IProduct[] = [{
        id: "idProduct",
        name: "Test",
        value: 100.0,
        amount: 20,
        orders: [],
        createdAt: new Date(),
        updatedAt: null,
        category: EProductCategory.MAIN_DISH
    }]

    const client: IClient = {
        id: "idClient",
        cpf: "clientCpf",
        name: "name",
        email: "name@gmail.com",
        orders: []
    };

    const order: IOrder = {
        id: "idProduct",
        value: 100,
        products: product,
        startedAt: new Date(),
        deliveredAt: null,
        status: EOrderStatus.DONE,
        client: client
    };

    const orderRepositoryMock: IOrderRepository = {
        saveOrUpdate: jest.fn(),
        getById: jest.fn(),
        getByStatus: jest.fn().mockResolvedValue(order)
    };

    beforeEach(() => {
        getOrderByStatus = new GetOrderByStatusUseCase(
            orderRepositoryMock
        );
    });

    it("should get order by status", async () => {
        const result = await getOrderByStatus.execute(EOrderStatus.DONE);
        expect(result).toBe(order);
    });
});
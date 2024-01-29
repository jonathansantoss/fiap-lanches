import "reflect-metadata"
import { IOrder } from "../../domain/models/IOrderModel";
import { IProduct } from "../../domain/models/IProductModel";
import { IClient } from "../../domain/models/IClientModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { IOrderRepository } from "../../repositories/interfaces/IOrderRepository";
import { GetOrderByStatusService } from "../../services/impl/order/GetOrderByStatusService";

describe("GetOrderByIdService", () => {
    let getOrderByStatus: GetOrderByStatusService;

    const product: IProduct[] = [{
        id: "idProduct",
        name: "Test",
        value: 100.0,
        amount: 20,
        orders: [],
        createdAt: new Date(),
        promotions: null,
        promotionValue: null,
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
        getOrderByStatus = new GetOrderByStatusService(
            orderRepositoryMock
        );
    });

    it("should get order by status", async () => {
        const result = await getOrderByStatus.execute(EOrderStatus.DONE);
        expect(result).toBe(order);
    });
});
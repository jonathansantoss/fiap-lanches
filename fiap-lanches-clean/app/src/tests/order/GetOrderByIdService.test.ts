import "reflect-metadata"
import { IOrder } from "../../domain/models/IOrderModel";
import { IProduct } from "../../domain/models/IProductModel";
import { IClient } from "../../domain/models/IClientModel";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IOrderRepository } from "../../repositories/interfaces/IOrderRepository";
import { GetOrderByIdService } from "../../services/impl/order/GetOrderByIdService";

describe("GetOrderByIdService", () => {
    let getOrderById: GetOrderByIdService;

    const product: IProduct[] = [{
        id: "idProduct",
        name: "Test",
        value: 100.0,
        amount: 20,
        promotions: null,
        promotionValue: null,
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
        getById: jest.fn().mockResolvedValue(order),
        getByStatus: jest.fn()
    };

    beforeEach(() => {
        getOrderById = new GetOrderByIdService(
            orderRepositoryMock
        );
    });

    it("should get order by id", async () => {
        const result = await getOrderById.execute("idOrder");
        expect(result).toBe(order);
    });
});
import "reflect-metadata"
import { IOrder } from "../../domain/models/IOrderModel";
import { IProduct } from "../../domain/models/IProductModel";
import { IClient } from "../../domain/models/IClientModel";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IOrderRepository } from "../../repositories/interfaces/IOrderRepository";
import { IGetOrderByIdService } from "../../services/interfaces/order/IGetOrderByIdService";
import { UpdateOrderStatusService } from "../../services/impl/order/UpdateOrderStatusService";
import { CustomError } from "../../services/exceptions/Exceptions";

describe("GetOrderByIdService", () => {
    const product: IProduct[] = [{
        id: "idProduct",
        name: "Test",
        value: 100.0,
        amount: 20,
        orders: [],
        promotions: null,
        promotionValue: null,
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
        id: "idOrder",
        value: 100,
        products: product,
        startedAt: new Date(),
        deliveredAt: null,
        status: EOrderStatus.FINISHED,
        client: client
    };

    const mockGetOrder: IGetOrderByIdService = {
        execute: jest.fn().mockResolvedValue(order),
    };

    const mockGetOrderNull: IGetOrderByIdService = {
        execute: jest.fn().mockResolvedValue(null),
    };

    const orderRepositoryMockNull: IOrderRepository = {
        saveOrUpdate: jest.fn().mockResolvedValue(order),
        getById: jest.fn(),
        getByStatus: jest.fn()
    };


    const orderRepositoryMock: IOrderRepository = {
        saveOrUpdate: jest.fn().mockResolvedValue(order),
        getById: jest.fn(),
        getByStatus: jest.fn()
    };

    it("should get order by status", async () => {
        const updateOrderStatus: UpdateOrderStatusService = new UpdateOrderStatusService(
            orderRepositoryMock,
            mockGetOrder
        );

        const result = await updateOrderStatus.execute("idOrder", EOrderStatus.DONE);
        expect(mockGetOrder.execute).toHaveBeenCalled();
        expect(result).toBe(order);
    });

    it("should throw error because order was not found", async () => {
        const updateOrderStatusError: UpdateOrderStatusService = new UpdateOrderStatusService(
            orderRepositoryMock,
            mockGetOrderNull
        );

        try {
            await updateOrderStatusError.execute("idOrder", EOrderStatus.DONE);
          } catch (error) {
            expect(error).toBeInstanceOf(CustomError);
          }

        expect(mockGetOrderNull.execute).toHaveBeenCalled();
        expect(orderRepositoryMockNull.saveOrUpdate).not.toHaveBeenCalled();
    });
});
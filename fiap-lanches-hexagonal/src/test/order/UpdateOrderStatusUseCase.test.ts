import "reflect-metadata"
import { IOrderRepository } from "../../core/applications/ports/out/order/IOrder.repository";
import { EOrderStatus } from "../../core/domain/enums/EOrderStatus";
import { IOrder } from "../../core/domain/entities/IOrder.entity";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { IClient } from "../../core/domain/entities/IClient.entity";
import { GetOrderByStatusUseCase } from "../../core/applications/usecases/order/GetOrderByStatusUseCase";
import { UpdateOrderStatusUseCase } from "../../core/applications/usecases/order/UpdateOrderStatusUseCase";
import { IGetOrderByIdUseCase } from "../../core/applications/ports/in/order/IGetOrderByIdUseCase";
import { CustomError } from "../../core/domain/exceptions/Exceptions";

describe("GetOrderByIdUseCase", () => {
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
        id: "idOrder",
        value: 100,
        products: product,
        startedAt: new Date(),
        deliveredAt: null,
        status: EOrderStatus.FINISHED,
        client: client
    };

    const mockGetOrder: IGetOrderByIdUseCase = {
        execute: jest.fn().mockResolvedValue(order),
    };

    const mockGetOrderNull: IGetOrderByIdUseCase = {
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
        const updateOrderStatus: UpdateOrderStatusUseCase = new UpdateOrderStatusUseCase(
            orderRepositoryMock,
            mockGetOrder
        );

        const result = await updateOrderStatus.execute("idOrder", EOrderStatus.DONE);
        expect(mockGetOrder.execute).toHaveBeenCalled();
        expect(result).toBe(order);
    });

    it("should throw error because order was not found", async () => {
        const updateOrderStatusError: UpdateOrderStatusUseCase = new UpdateOrderStatusUseCase(
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
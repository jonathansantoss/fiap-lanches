import "reflect-metadata"
import { IFindClientByCpfUseCase } from "../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { IGetProductByIdsUseCase } from "../../core/applications/ports/in/product/IGetProductByIdsUseCase";
import { IOrderRepository } from "../../core/applications/ports/out/order/IOrder.repository";
import { CreateOrderUseCase } from "../../core/applications/usecases/order/CreateOrderUseCase";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";

describe("CreateOrderUseCase", () => {
    let createOrderUseCase: CreateOrderUseCase;

    const mockGetProductByIdsUseCase: IGetProductByIdsUseCase = {
        execute: jest.fn().mockResolvedValue([{
            name: "Test",
            value: 100.0,
            amount: 20,
            orders: [],
            createdAt: new Date(),
            updatedAt: null,
            category: EProductCategory.MAIN_DISH
        }]),
    };

    const orderRepositoryMock: IOrderRepository = {
        saveOrUpdate: jest.fn().mockResolvedValue("idOrder"),
        getById: jest.fn(),
        getByStatus: jest.fn()
    };

    const findClientByCpfUseCaseMock: IFindClientByCpfUseCase = {
        execute: jest.fn().mockResolvedValue({
            id: "id",
            cpf: "123",
            name: "Name",
            email: "name@gmail.com",
            orders: []
        })
    };

    beforeEach(() => {
        createOrderUseCase = new CreateOrderUseCase(
            orderRepositoryMock,
            mockGetProductByIdsUseCase,
            findClientByCpfUseCaseMock
        );
    });

    it("should create order", async () => {

        const order = {
            value: 100,
            products: ["idProducts"],
            clientCpf: "idCLient"
        };

        const result = await createOrderUseCase.execute(order);
        
        expect(result).toBe('idOrder');
        expect(findClientByCpfUseCaseMock.execute).toHaveBeenCalled();
        expect(mockGetProductByIdsUseCase.execute).toHaveBeenCalled();
    });
});
import "reflect-metadata"
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IOrderRepository } from "../../repositories/interfaces/IOrderRepository";
import { IFindClientByCpfService } from "../../services/interfaces/client/IFindClientByCpfService";
import { IGetProductByIdsService } from "../../services/interfaces//product/IGetProductByIdsService";
import { CreateOrderService } from "../../services/impl/order/CreateOrderService";

describe("CreateOrderService", () => {
    let createOrderService: CreateOrderService;

    const mockGetProductByIdsService: IGetProductByIdsService = {
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

    const findClientByCpfServiceMock: IFindClientByCpfService = {
        execute: jest.fn().mockResolvedValue({
            id: "id",
            cpf: "123",
            name: "Name",
            email: "name@gmail.com",
            orders: []
        })
    };

    beforeEach(() => {
        createOrderService = new CreateOrderService(
            orderRepositoryMock,
            mockGetProductByIdsService,
            findClientByCpfServiceMock
        );
    });

    it("should create order", async () => {

        const order = {
            value: 100,
            products: ["idProducts"],
            clientCpf: "idCLient"
        };

        const result = await createOrderService.execute(order);
        
        expect(result).toBe('idOrder');
        expect(findClientByCpfServiceMock.execute).toHaveBeenCalled();
        expect(mockGetProductByIdsService.execute).toHaveBeenCalled();
    });
});
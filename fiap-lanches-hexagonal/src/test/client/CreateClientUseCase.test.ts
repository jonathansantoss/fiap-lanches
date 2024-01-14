import "reflect-metadata"
import { IFindClientByCpfUseCase } from "../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { IGetProductByIdsUseCase } from "../../core/applications/ports/in/product/IGetProductByIdsUseCase";
import { CreateOrderUseCase } from "../../core/applications/usecases/order/CreateOrderUseCase";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { CreateClientUseCase } from "../../core/applications/usecases/client/CreateClientUseCase";
import { CustomError } from "../../core/domain/exceptions/Exceptions";

describe("CreateClientUseCase", () => {
    let createClientUseCase: CreateClientUseCase;

    const mockFindClientByCpfNull: IFindClientByCpfUseCase = {
        execute: jest.fn().mockResolvedValue(null),
    };

    const mockFindClientByCpf: IFindClientByCpfUseCase = {
        execute: jest.fn().mockResolvedValue({
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        }),
    };

    const mockClientRepository: IClientRepository = {
        save: jest.fn().mockResolvedValue("idOrder"),
        delete: jest.fn(),
        findByCpf: jest.fn(),
        update: jest.fn(),
        getAllClients: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create client", async () => {
        createClientUseCase = new CreateClientUseCase(
            mockClientRepository,
            mockFindClientByCpfNull
        );

        const client = {
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        }

        const result = await createClientUseCase.execute(client);

        expect(mockClientRepository.save).toHaveBeenCalled();
        expect(mockFindClientByCpfNull.execute).toHaveBeenCalled();
    });

    it("should throw error cpf in use", async () => {
        createClientUseCase = new CreateClientUseCase(
            mockClientRepository,
            mockFindClientByCpf
        );

        const client = {
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        }

        try {
            await createClientUseCase.execute(client);
        } catch (error) {
            expect(error).toBeInstanceOf(CustomError);
        }

        expect(mockFindClientByCpf.execute).toHaveBeenCalled();
        expect(mockClientRepository.save).not.toHaveBeenCalled();
    });
});
import "reflect-metadata"
import { IFindClientByCpfService } from "../../services/interfaces/client/IFindClientByCpfService";
import { IClientRepository } from "../../repositories/interfaces/IClientRepository";
import { CreateClientService } from "../../services/impl/client/CreateClientService";
import { CustomError } from "../../domain/exceptions/Exceptions";

describe("CreateClientService", () => {
    let createClientService: CreateClientService;

    const mockFindClientByCpfNull: IFindClientByCpfService = {
        execute: jest.fn().mockResolvedValue(null),
    };

    const mockFindClientByCpf: IFindClientByCpfService = {
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
        createClientService = new CreateClientService(
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

        const result = await createClientService.execute(client);

        expect(mockClientRepository.save).toHaveBeenCalled();
        expect(mockFindClientByCpfNull.execute).toHaveBeenCalled();
    });

    it("should throw error cpf in use", async () => {
        createClientService = new CreateClientService(
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
            await createClientService.execute(client);
        } catch (error) {
            expect(error).toBeInstanceOf(CustomError);
        }

        expect(mockFindClientByCpf.execute).toHaveBeenCalled();
        expect(mockClientRepository.save).not.toHaveBeenCalled();
    });
});
import "reflect-metadata"
import { IClientRepository } from "../../repositories/interfaces/IClientRepository";
import { ListClientService } from "../../services/impl/client/ListClientService";

describe("ListClientService", () => {
    let listClientsService: ListClientService;

    const mockClientRepository: IClientRepository = {
        save: jest.fn(),
        delete: jest.fn(),
        findByCpf: jest.fn(),
        update: jest.fn(),
        getAllClients: jest.fn().mockResolvedValue([{
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        }])
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should list client", async () => {
        listClientsService = new ListClientService(
            mockClientRepository
        );

        const result = await listClientsService.execute().then(resp => resp);
        expect(result.length).toBe(1);
        expect(mockClientRepository.getAllClients).toHaveBeenCalled();
    });
});
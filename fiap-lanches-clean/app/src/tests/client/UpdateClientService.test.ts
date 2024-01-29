import "reflect-metadata"
import { IClientRepository } from "../../repositories/interfaces/IClientRepository";
import { UpdateClientService } from "../../services/impl/client/UpdateClientService";

describe("UpdateClientService", () => {
    let updateClientService: UpdateClientService;

    const mockClientRepository: IClientRepository = {
        save: jest.fn(),
        delete: jest.fn(),
        findByCpf: jest.fn(),
        update: jest.fn(),
        getAllClients: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should update client", async () => {
        updateClientService = new UpdateClientService(
            mockClientRepository
        );

        const result = await updateClientService.execute({
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        });

        expect(mockClientRepository.update).toHaveBeenCalled();
    });
});
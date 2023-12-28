import "reflect-metadata"
import { IClientRepository } from "../../repositories/interfaces/IClientRepository";
import { DeleteClientService } from "../../services/impl/client/DeleteClientService";

describe("DeleteClientService", () => {
    let deleteClientService: DeleteClientService;

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

    it("should delete client", async () => {
        deleteClientService = new DeleteClientService(
            mockClientRepository
        );

        await deleteClientService.execute("idClient");

        expect(mockClientRepository.delete).toHaveBeenCalled();
    });
});
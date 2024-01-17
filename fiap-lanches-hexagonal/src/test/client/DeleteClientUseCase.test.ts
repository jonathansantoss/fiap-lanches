import "reflect-metadata"
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { DeleteClientUseCase } from "../../core/applications/usecases/client/DeleteClientUseCase";

describe("DeleteClientUseCase", () => {
    let deleteClientUseCase: DeleteClientUseCase;

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
        deleteClientUseCase = new DeleteClientUseCase(
            mockClientRepository
        );

        await deleteClientUseCase.execute("idClient");

        expect(mockClientRepository.delete).toHaveBeenCalled();
    });
});
import "reflect-metadata"
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { UpdateClientUseCase } from "../../core/applications/usecases/client/UpdateClientUseCase";

describe("UpdateClientUseCase", () => {
    let updateClientUseCase: UpdateClientUseCase;

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
        updateClientUseCase = new UpdateClientUseCase(
            mockClientRepository
        );

        const result = await updateClientUseCase.execute({
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        });

        expect(mockClientRepository.update).toHaveBeenCalled();
    });
});
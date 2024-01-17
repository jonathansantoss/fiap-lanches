import "reflect-metadata"
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { FindClientByCpfUseCase } from "../../core/applications/usecases/client/FindClientByCpfUseCase";

describe("FindClientByCpfUseCase", () => {
    let findClientByCpf: FindClientByCpfUseCase;

    const mockClientRepository: IClientRepository = {
        save: jest.fn(),
        delete: jest.fn(),
        findByCpf: jest.fn().mockResolvedValue({
            id: "idClient",
            cpf: "12345678901",
            name: "Client",
            email: "client@gmail.com",
            orders: []
        }),
        update: jest.fn(),
        getAllClients: jest.fn()
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should find client by cpf", async () => {
        findClientByCpf = new FindClientByCpfUseCase(
            mockClientRepository
        );

        const result = await findClientByCpf.execute("idClient").then(result => result);

        expect(result.id).toBe("idClient")

        expect(mockClientRepository.findByCpf).toHaveBeenCalled();
    });
});
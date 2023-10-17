import "reflect-metadata"
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { FindClientByCpfUseCase } from "../../core/applications/usecases/client/FindClientByCpfUseCase";
import { ListClientUseCase } from "../../core/applications/usecases/client/ListClientUseCase";

describe("ListClientUseCase", () => {
    let listClientsUseCase: ListClientUseCase;

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
        listClientsUseCase = new ListClientUseCase(
            mockClientRepository
        );

        const result = await listClientsUseCase.execute().then(resp => resp);
        console.log(result)
        expect(result.length).toBe(1);
        expect(mockClientRepository.getAllClients).toHaveBeenCalled();
    });
});
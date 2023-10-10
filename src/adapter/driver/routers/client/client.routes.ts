import { Router } from "express";
import { CreateClientController } from "../../controllers/client/CreateClient.controller";
import { DeleteClientController } from "../../controllers/client/DeleteClient.controller";
import { FindClientByCpfController } from "../../controllers/client/FindClientByCpf.controller";
import { UpdateClientController } from "../../controllers/client/UpdateClient.controller";
import { ListClientsController } from "../../controllers/client/ListClients.controller";

const clientRouter = Router();
const createClientController = new CreateClientController();
const deleteClientController = new DeleteClientController();
const findClientByCpfController = new FindClientByCpfController();
const updateClientController = new UpdateClientController();
const listClientsController = new ListClientsController();

clientRouter.post("/", createClientController.handler);
clientRouter.delete("/:cpf", deleteClientController.handler);
clientRouter.get("/:cpf", findClientByCpfController.handler);
clientRouter.put("/", updateClientController.handler);
clientRouter.get("/", listClientsController.handler);

export { clientRouter };

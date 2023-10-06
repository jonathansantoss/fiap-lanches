import { Router } from "express";
import { CreateClientController } from "../../controllers/client/CreateClient.controller";

const clientRouter = Router();
const createClientController = new CreateClientController();

clientRouter.post("/", createClientController.handler);

export { clientRouter };

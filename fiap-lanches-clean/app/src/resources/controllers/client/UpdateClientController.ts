import { Request, Response } from "express";
import { IUpdateClientService } from "../../../services/interfaces/client/IUpdateClientService";
import { IFindClientByCpfService } from "../../../services/interfaces/client/IFindClientByCpfService";
import { UpdateClientService } from "../../../services/impl/client/UpdateClientService";
import { FindClientByCpfService } from "../../../services/impl/client/FindClientByCpfService";
import { container } from "../../../configurations/InjectionDependency";

class UpdateClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const updateClientService: IUpdateClientService =
      container.resolve<IUpdateClientService>(UpdateClientService);

    const findClientByCpfService: IFindClientByCpfService =
      container.resolve<IFindClientByCpfService>(FindClientByCpfService);

    const client = await findClientByCpfService.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await updateClientService.execute(request.body);

    return response.status(200).send("Client updated with success");
  }
}

export { UpdateClientController };

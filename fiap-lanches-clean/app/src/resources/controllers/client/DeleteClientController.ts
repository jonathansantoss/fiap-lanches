import { Request, Response } from "express";
import { IDeleteClientService } from "../../../services/interfaces/client/IDeleteClientService";
import { IFindClientByCpfService } from "../../../services/interfaces/client/IFindClientByCpfService";
import { DeleteClientService } from "../../../services/impl/client/DeleteClientService";
import { FindClientByCpfService } from "../../../services/impl/client/FindClientByCpfService";
import { container } from "../../../configurations/InjectionDependency"

class DeleteClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const deleteClientService: IDeleteClientService =
      container.resolve<IDeleteClientService>(DeleteClientService);

    const findClientByCpfService: IFindClientByCpfService =
      container.resolve<IFindClientByCpfService>(FindClientByCpfService);

    const client = await findClientByCpfService.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await deleteClientService.execute(cpf);

    return response.status(200).send("Client was deleted with success");
  }
}

export { DeleteClientController };

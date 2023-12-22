import { Request, Response } from "express";
import { IFindClientByCpfService } from "../../../services/interfaces/client/IFindClientByCpfService";
import { FindClientByCpfService } from "../../../services/impl/client/FindClientByCpfService"
import { container } from "../../../configurations/InjectionDependency";

class FindClientByCpfController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const findClientByCpfService: IFindClientByCpfService =
      container.resolve<IFindClientByCpfService>(FindClientByCpfService);

    const client = await findClientByCpfService.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    return response.status(200).send(client);
  }
}

export { FindClientByCpfController };

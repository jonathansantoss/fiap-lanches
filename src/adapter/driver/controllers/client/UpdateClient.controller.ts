import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IUpdateClientUseCase } from "../../../../core/applications/ports/in/client/IUpdateClientUseCase";
import { UpdateClientUseCase } from "../../../../core/applications/usecases/client/UpdateClientUseCase";
import { IFindClientByCpfUseCase } from "../../../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { FindClientByCpfUseCase } from "../../../../core/applications/usecases/client/FindClientByCpfUseCase";

class UpdateClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const updateClientUseCase: IUpdateClientUseCase =
      container.resolve<IUpdateClientUseCase>(UpdateClientUseCase);

    const findClientByCpfUseCase: IFindClientByCpfUseCase =
      container.resolve<IFindClientByCpfUseCase>(FindClientByCpfUseCase);

    const client = await findClientByCpfUseCase.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await updateClientUseCase.execute(request.body);

    return response.status(200).send("Client updated with success");
  }
}

export { UpdateClientController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { redis } from "../../../../config/RedisConfig";
import { IFindClientByCpfUseCase } from "../../../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { FindClientByCpfUseCase } from "../../../../core/applications/usecases/client/FindClientByCpfUseCase";

class FindClientByCpfController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const findClientByCpfUseCase: IFindClientByCpfUseCase =
      container.resolve<IFindClientByCpfUseCase>(FindClientByCpfUseCase);

    const client = await findClientByCpfUseCase.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    return response.status(200).send(client);
  }
}

export { FindClientByCpfController };

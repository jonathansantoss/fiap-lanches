import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IDeleteClientUseCase } from "../../../../core/applications/ports/in/client/IDeleteClientUseCase";
import { DeleteClientUseCase } from "../../../../core/applications/usecases/client/DeleteClientUseCase";
import { IFindClientByCpfUseCase } from "../../../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { FindClientByCpfUseCase } from "../../../../core/applications/usecases/client/FindClientByCpfUseCase";

class DeleteClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;

    const deleteClientUseCase: IDeleteClientUseCase =
      container.resolve<IDeleteClientUseCase>(DeleteClientUseCase);

    const findClientByCpfUseCase: IFindClientByCpfUseCase =
      container.resolve<IFindClientByCpfUseCase>(FindClientByCpfUseCase);

    const client = await findClientByCpfUseCase.execute(cpf);

    if (!client) {
      return response.status(404).send("Nout found client!");
    }

    await deleteClientUseCase.execute(cpf);

    return response.status(200).send("Client was deleted with success");
  }
}

export { DeleteClientController };

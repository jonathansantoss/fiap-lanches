import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { IDeleteClientUseCase } from "../../../../core/applications/ports/in/client/IDeleteClientUseCase";
import { DeleteClientUseCase } from "../../../../core/applications/usecases/client/DeleteClientUseCase";

class DeleteClientController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params;
    const deleteClientUseCase: IDeleteClientUseCase =
      container.resolve<IDeleteClientUseCase>(DeleteClientUseCase);

    await deleteClientUseCase.execute(cpf);

    return response.status(200).send();
  }
}

export { DeleteClientController };

import { Request, Response } from "express";
import { container } from "../../../../shared/container";
import { CreateEmployeeUseCase } from "../../../../core/applications/usecases/employee/CreateEmployeeUseCase";
import { ICreateEmployeeUseCase } from "../../../../core/applications/ports/in/employee/ICreateEmployeeUseCase";

class CreateEmployeeController {
  async handler(request: Request, response: Response): Promise<Response> {
    const createEmployeeUseCase: ICreateEmployeeUseCase = container.resolve(
      CreateEmployeeUseCase
    );

    await createEmployeeUseCase.execute(request.body);

    return response.status(200).send("Employee created successfully");
  }
}

export { CreateEmployeeController };

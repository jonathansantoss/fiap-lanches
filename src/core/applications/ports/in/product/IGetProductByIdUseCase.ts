import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface IGetProductByIdUseCase {
  execute(id: string): Promise<IProduct>;
}

export { IGetProductByIdUseCase };

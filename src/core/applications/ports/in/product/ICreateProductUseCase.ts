import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface ICreateProductUseCase {
  execute(product: IProduct): Promise<string>;
}

export { ICreateProductUseCase };

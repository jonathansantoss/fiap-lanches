import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface ICreateProductUseCase {
  execute(product: IProduct): void;
}

export { ICreateProductUseCase };

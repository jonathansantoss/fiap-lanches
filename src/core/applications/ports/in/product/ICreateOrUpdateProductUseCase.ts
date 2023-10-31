import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface ICreateOrUpdateProductUseCase {
  execute(product: IProduct): Promise<string>;
}

export { ICreateOrUpdateProductUseCase };

import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface IGetProductByIdsUseCase {
  execute(ids: string[]): Promise<IProduct[]>;
}

export { IGetProductByIdsUseCase };

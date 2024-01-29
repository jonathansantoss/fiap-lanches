import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";

interface IGetProductByIdsService {
  execute(ids: string[], productRepository: IProductRepository): Promise<IProduct[]>;
}

export { IGetProductByIdsService };

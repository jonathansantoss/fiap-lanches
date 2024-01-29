import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";

interface ICreateOrUpdateProductService {
  execute(product: IProduct, productRepository: IProductRepository): Promise<string>;
}

export { ICreateOrUpdateProductService };

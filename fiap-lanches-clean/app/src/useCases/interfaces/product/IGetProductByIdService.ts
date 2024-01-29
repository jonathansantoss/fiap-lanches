import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";

interface IGetProductByIdService {
  execute(id: string, productRepository: IProductRepository): Promise<IProduct>;
}

export { IGetProductByIdService };

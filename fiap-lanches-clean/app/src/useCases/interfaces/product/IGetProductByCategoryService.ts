import { IProduct } from "../../../domain/models/IProductModel";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";

interface IGetProductByCategoryService {
  execute(category: EProductCategory, productRepository: IProductRepository): Promise<IProduct[]>;
}

export { IGetProductByCategoryService };

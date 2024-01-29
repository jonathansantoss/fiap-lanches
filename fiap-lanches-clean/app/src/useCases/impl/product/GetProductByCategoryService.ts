import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByCategoryService } from "../../interfaces/product/IGetProductByCategoryService";

class GetProductByCategoryService implements IGetProductByCategoryService {


    execute(category: EProductCategory, productRepository: IProductRepository): Promise<IProduct[]> {
        return productRepository.getByCategory(category);
    }
}

export { GetProductByCategoryService };

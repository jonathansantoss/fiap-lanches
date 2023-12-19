import { inject, injectable } from "tsyringe";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByCategoryService } from "../../interfaces/product/IGetProductByCategoryService";

@injectable()
class GetProductByCategoryService implements IGetProductByCategoryService {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(category: EProductCategory): Promise<IProduct[]> {
        return this.productRepository.getByCategory(category);
    }
}

export { GetProductByCategoryService };

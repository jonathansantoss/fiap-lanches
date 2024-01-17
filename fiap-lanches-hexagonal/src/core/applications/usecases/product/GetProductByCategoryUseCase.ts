import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";
import { IGetProductByCategoryUseCase } from "../../ports/in/product/IGetProductByCategoryUseCase";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProduct } from "../../../domain/entities/IProduct.entity";

@injectable()
class GetProductByCategoryUseCase implements IGetProductByCategoryUseCase {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(category: EProductCategory): Promise<IProduct[]> {
        return this.productRepository.getByCategory(category);
    }
}

export { GetProductByCategoryUseCase };

import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";
import { EProductCategory } from "../../../domain/enums/EProductCategory";
import { IProduct } from "../../../domain/entities/IProduct.entity";
import { IGetProductByIdUseCase } from "../../ports/in/product/IGetProductByIdUseCase";

@injectable()
class GetProductByIdUseCase implements IGetProductByIdUseCase {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string): Promise<IProduct> {
        return this.productRepository.getById(id);
    }
}

export { GetProductByIdUseCase };

import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";
import { IProduct } from "../../../domain/entities/IProduct.entity";
import { IGetProductByIdsUseCase } from "../../ports/in/product/IGetProductByIdsUseCase";

@injectable()
class GetProductByIdsUseCase implements IGetProductByIdsUseCase {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string[]): Promise<IProduct[]> {
        return this.productRepository.getByIds(id);
    }
}

export { GetProductByIdsUseCase };

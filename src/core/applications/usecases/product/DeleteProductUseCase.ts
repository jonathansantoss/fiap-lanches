import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";
import { IDeleteProductUseCase } from "../../ports/in/product/IDeleteProductUseCase";

@injectable()
class DeleteProductUseCase implements IDeleteProductUseCase {

    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string): Promise<void> {
        return this.productRepository.delete(id);
    }
}

export { DeleteProductUseCase }
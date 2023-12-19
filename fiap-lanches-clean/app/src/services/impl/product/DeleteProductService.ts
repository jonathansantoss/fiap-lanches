import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IDeleteProductService } from "../../interfaces/product/IDeleteProductService";

@injectable()
class DeleteProductService implements IDeleteProductService {

    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string): Promise<void> {
        return this.productRepository.delete(id);
    }
}

export { DeleteProductService }
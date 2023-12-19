import { inject, injectable } from "tsyringe";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";

@injectable()
class GetProductByIdService implements IGetProductByIdService {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string): Promise<IProduct> {
        return this.productRepository.getById(id);
    }
}

export { GetProductByIdService };

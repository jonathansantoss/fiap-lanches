import { inject, injectable } from "tsyringe";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByIdsService } from "../../interfaces/product/IGetProductByIdsService";

@injectable()
class GetProductByIdsService implements IGetProductByIdsService {
    constructor(
        @inject("ProductRepository") private productRepository: IProductRepository
    ) { }

    execute(id: string[]): Promise<IProduct[]> {
        return this.productRepository.getByIds(id);
    }
}

export { GetProductByIdsService };

import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByIdsService } from "../../interfaces/product/IGetProductByIdsService";

class GetProductByIdsService implements IGetProductByIdsService {

    execute(id: string[], productRepository: IProductRepository): Promise<IProduct[]> {
        return productRepository.getByIds(id);
    }
}

export { GetProductByIdsService };

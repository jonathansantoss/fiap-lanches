import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IGetProductByIdService } from "../../interfaces/product/IGetProductByIdService";

class GetProductByIdService implements IGetProductByIdService {

    execute(id: string, productRepository: IProductRepository): Promise<IProduct> {
        return productRepository.getById(id);
    }
}

export { GetProductByIdService };

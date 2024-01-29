import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { IDeleteProductService } from "../../interfaces/product/IDeleteProductService";

class DeleteProductService implements IDeleteProductService {


    execute(id: string, productRepository: IProductRepository): Promise<void> {
        return productRepository.delete(id);
    }
}

export { DeleteProductService }
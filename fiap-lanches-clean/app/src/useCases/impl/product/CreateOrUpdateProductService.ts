import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";

class CreateOrUpdateProductService implements ICreateOrUpdateProductService {

  execute(product: IProduct, productRepository: IProductRepository): Promise<string> {
    product.promotionValue = product.promotionValue ? product.promotionValue : null
    product.createdAt = product.createdAt ? product.createdAt : new Date();
    return productRepository.saveOrUpdate(product);
  }
}

export { CreateOrUpdateProductService };

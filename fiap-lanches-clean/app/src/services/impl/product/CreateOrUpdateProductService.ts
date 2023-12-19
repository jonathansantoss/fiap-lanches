import { injectable, inject } from "tsyringe";
import { IProduct } from "../../../domain/models/IProductModel";
import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { ICreateOrUpdateProductService } from "../../interfaces/product/ICreateOrUpdateProductService";

@injectable()
class CreateOrUpdateProductService implements ICreateOrUpdateProductService {
  constructor(
    @inject("ProductRepository") private productRepository: IProductRepository
  ) { }


  execute(product: IProduct): Promise<string> {
    product.promotionValue = product.promotionValue ? product.promotionValue : null
    product.createdAt = product.createdAt ? product.createdAt : new Date();
    return this.productRepository.saveOrUpdate(product);
  }
}

export { CreateOrUpdateProductService };

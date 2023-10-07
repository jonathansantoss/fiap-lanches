import { injectable, inject } from "tsyringe";
import { IProduct } from "../../../domain/entities/IProduct.entity";
import { ICreateProductUseCase } from "../../ports/in/product/ICreateProductUseCase";
import { IProductRepository } from "../../ports/out/product/IProduct.repository";

@injectable()
class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @inject("ProductRepository") private productRepository: IProductRepository
  ) { }


  execute(product: IProduct): Promise<string> {
    return this.productRepository.save(product);
  }
}

export { CreateProductUseCase };

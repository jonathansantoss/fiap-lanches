import { ProductRepository } from "../../../../adapter/driven/infra/repositories/Product.repository";
import { IProduct } from "../../../domain/entities/IProduct.entity";
import { ICreateProductUseCase } from "../../ports/in/product/ICreateProductUseCase";

class CreateProductUseCase implements ICreateProductUseCase {
  constructor(private repository: ProductRepository) {}

  execute(product: IProduct): void {
    this.repository.save(product);
  }
}

export { CreateProductUseCase };

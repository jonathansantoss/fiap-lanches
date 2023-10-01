import { IProductRepository } from "../../../../core/applications/ports/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";

class ProductRepository implements IProductRepository {
  save(produto: IProduct): void {
    throw new Error("Method not implemented.");
  }
}

export { ProductRepository };

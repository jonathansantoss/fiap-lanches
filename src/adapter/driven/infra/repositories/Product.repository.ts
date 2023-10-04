import { IProductRepository } from "../../../../core/applications/ports/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Product } from "../../../data/Product.model";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async save(product: IProduct): Promise<string> {
      await this.repository.save(product)
      return product.id
  }
}

export { ProductRepository };

import { IProductRepository } from "../../../../core/applications/ports/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Product } from "../../../data/Product.model";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async save(product: IProduct): Promise<string> {
    try {
      await this.repository.save(product)
      return product.id
    } catch (error) {
      const message = "Error on saving product in database"
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    }

  }
}

export { ProductRepository };

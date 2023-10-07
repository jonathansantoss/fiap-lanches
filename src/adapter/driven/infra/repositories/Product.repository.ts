import { IProductRepository } from "../../../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Product } from "../../../data/Product.model";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async save(product: IProduct): Promise<string> {
    try {
      const clientCreated = this.repository.create(product);
      await this.repository.save(clientCreated);
      return clientCreated.id
    } catch (error) {
      const message = "Error on saving product in database"
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    }

  }
}

export { ProductRepository };

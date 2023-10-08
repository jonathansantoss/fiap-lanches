import { IProductRepository } from "../../../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Product } from "../../../data/Product.model";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async save(product: IProduct): Promise<string> {
    const clientCreated = this.repository.create(product);
    return await this.repository.save(clientCreated).then(resp => {
      return resp.id
    }).catch(error => {
      const message = "Error on saving product in database"
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }

  async getByCategory(item: EProductCategory): Promise<IProduct[]> {
    return await this.repository.find({
      where: {
        category: item,
      },
    }).then(resp => {
      return resp
    }).catch(error => {
      const message = "Error getting product from database"
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }
}

export { ProductRepository };

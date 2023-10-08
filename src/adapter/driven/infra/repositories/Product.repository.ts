import { IProductRepository } from "../../../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../config/DataSource";
import { Product } from "../../../data/Product.model";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async saveOrUpdate(product: IProduct): Promise<string> {
    const productCreated = !product.id ? this.repository.create(product) : product;

    return await this.repository.save(productCreated).then(resp => {
      return resp.id
    }).catch(error => {
      const message = `Error on ${product.id ? "updating" : "creating"} product in database`
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }

  async getByCategory(category: EProductCategory): Promise<IProduct[]> {
    return await this.repository.find({
      where: {
        category,
      },
    }).then(resp => {
      return resp
    }).catch(error => {
      const message = "Error getting product from database"
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id }).then(result => {}).catch(error => {
      const message = `Error deleting product (${id}) from database`
      console.error(`${message}: ${error.message}`)
      throw new Error(message)
    });
  }

}



export { ProductRepository };

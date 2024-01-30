import { IProductRepository } from "../../../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../../../core/domain/entities/IProduct.entity";
import { In, Repository } from "typeorm";
import { AppDataSource } from "../../../../config/DataSource";
import { Product } from "../../../data/Product.model";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";
// import { redis } from "../../../../config/RedisConfig";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product> =
    AppDataSource.getRepository(Product);

  async saveOrUpdate(product: IProduct): Promise<string> {
    const productCreated = !product.id ? this.repository.create(product) : product;

    return await this.repository.save(productCreated).then(resp => {
      if (!resp) {
        return null;
      }
      return resp.id
    }).catch(error => {
      const message = `Error on ${product.id ? "updating" : "creating"} product in database`
      throw new Error(message)
    });
  }

  
  async getByCategory(category: EProductCategory): Promise<IProduct[]> {
    return await this.repository.find({
      where: {
        category,
      },
    }).then((resp) => {
      return resp
    }).catch(error => {
      const message = "Error getting product from database"
      throw new Error(message)
    });
  }


  async delete(id: string): Promise<void> {
    await this.repository.delete({ id }).then(result => { }).catch(error => {
      const message = `Error deleting product (${id}) from database`
      throw new Error(message)
    });
  }


  async getById(id: string): Promise<IProduct> {
    // const productRedis = await redis.get("productId:" + id);

    // if (productRedis !== null) {
    //   return Promise.resolve(JSON.parse(productRedis)) as Promise<IProduct>;
    // }
    
    console.log(id)
    return await this.repository.findOne({
      where: {
        id,
      },
    }).then(async (resp) => {
      if(!resp) {
        return null
      }

      // await redis.set("productId:" + resp.id, JSON.stringify(resp));
      // await redis.expire("productId:" + resp.id, 1000);
      return resp
    }).catch(error => {
      console.log(error)
      const message = "Error getting product from database"
      throw new Error(message)
    });
  }

  async getByIds(ids: string[]): Promise<IProduct[]> {
    return await this.repository.find({
      where: {
        id: In(ids)
      },
    }).then(resp => {
      return resp
    }).catch(error => {
      const message = "Error getting products from database"
      throw new Error(message)
    });
  }

}



export { ProductRepository };

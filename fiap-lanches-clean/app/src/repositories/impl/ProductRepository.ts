import { IProductRepository } from "../interfaces/IProductRepository";
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { In } from "typeorm";
import { IDataSource } from "../dataSource/IDataSource";

class ProductRepository implements IProductRepository {
  private dataSource: IDataSource;

  constructor(dataSource: IDataSource) {
    this.dataSource = dataSource;
  }


  async saveOrUpdate(product: IProduct): Promise<string> {

    return await this.dataSource.save(product).then(resp => {
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
    return await this.dataSource.findBy("category", category, null).then((resp) => {
      return resp
    }).catch(error => {
      const message = "Error getting product from database"
      throw new Error(message)
    });
  }


  async delete(id: string): Promise<void> {
    await this.dataSource.delete(id).then(result => { }).catch(error => {
      const message = `Error deleting product (${id}) from database`
      throw new Error(message)
    });
  }


  async getById(id: string): Promise<IProduct> {
    return await this.dataSource.findOne(id).then(async (resp) => {
      if(!resp) {
        return null
      }

      return resp
    }).catch(error => {
      console.log(error)
      const message = "Error getting product from database"
      throw new Error(message)
    });
  }

  async getByIds(ids: string[]): Promise<IProduct[]> {
    return await this.dataSource.findBy("id", In(ids), null).then(resp => {
      return resp
    }).catch(error => {
      const message = "Error getting products from database"
      throw new Error(message)
    });
  }

}



export { ProductRepository };

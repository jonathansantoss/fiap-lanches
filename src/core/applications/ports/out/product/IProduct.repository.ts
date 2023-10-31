import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface IProductRepository {
  saveOrUpdate(produto: IProduct): Promise<string>;
  getByCategory(category: string): Promise<IProduct[]>;
  getById(id: string): Promise<IProduct>;
  getByIds(id: string[]): Promise<IProduct[]>;
  delete(id: string): Promise<void>;
}

export { IProductRepository };

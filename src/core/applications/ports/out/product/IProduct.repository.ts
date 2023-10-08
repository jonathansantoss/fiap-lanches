import { IProduct } from "../../../../domain/entities/IProduct.entity";

interface IProductRepository {
  save(produto: IProduct): Promise<string>;
  getByCategory(category: string): Promise<IProduct[]>;
}

export { IProductRepository };

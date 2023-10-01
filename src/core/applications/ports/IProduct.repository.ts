import { IProduct } from "../../domain/entities/IProduct.entity";

interface IProductRepository {
  save(produto: IProduct): void;
}

export { IProductRepository };

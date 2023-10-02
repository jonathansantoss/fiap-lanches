import { container } from "tsyringe";
import { IProductRepository } from "../../core/applications/ports/IProduct.repository";
import { ProductRepository } from "../../adapter/driven/infra/repositories/Product.repository";

container.registerSingleton<IProductRepository>(
  "ProdutoRepository",
  ProductRepository
);

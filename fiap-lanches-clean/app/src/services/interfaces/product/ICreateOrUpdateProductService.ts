import { IProduct } from "../../../domain/models/IProductModel";

interface ICreateOrUpdateProductService {
  execute(product: IProduct): Promise<string>;
}

export { ICreateOrUpdateProductService };

import { IProduct } from "../../../domain/models/IProductModel";

interface IGetProductByIdsService {
  execute(ids: string[]): Promise<IProduct[]>;
}

export { IGetProductByIdsService };

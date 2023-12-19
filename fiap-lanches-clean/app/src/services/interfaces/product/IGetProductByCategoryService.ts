import { IProduct } from "../../../domain/models/IProductModel";
import { EProductCategory } from "../../../domain/enums/EProductCategory";

interface IGetProductByCategoryService {
  execute(category: EProductCategory): Promise<IProduct[]>;
}

export { IGetProductByCategoryService };

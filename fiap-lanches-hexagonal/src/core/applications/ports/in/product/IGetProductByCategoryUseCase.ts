import { IProduct } from "../../../../domain/entities/IProduct.entity";
import { EProductCategory } from "../../../../domain/enums/EProductCategory";

interface IGetProductByCategoryUseCase {
  execute(category: EProductCategory): Promise<IProduct[]>;
}

export { IGetProductByCategoryUseCase };

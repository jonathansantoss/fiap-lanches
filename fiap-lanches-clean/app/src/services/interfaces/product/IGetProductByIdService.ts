import { IProduct } from "../../../domain/models/IProductModel";

interface IGetProductByIdService {
  execute(id: string): Promise<IProduct>;
}

export { IGetProductByIdService };

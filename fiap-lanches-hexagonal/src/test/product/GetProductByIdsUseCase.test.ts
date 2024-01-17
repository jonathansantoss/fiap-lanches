import "reflect-metadata"
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { GetProductByIdsUseCase } from "../../core/applications/usecases/product/GetProductByIdsUseCase";

const product: IProduct[] = [{
  name: "Test",
  value: 100.0,
  amount: 20,
  orders: [],
  createdAt: new Date(),
  updatedAt: null,
  category: EProductCategory.MAIN_DISH
}];


const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn(),
  getByCategory: jest.fn(),
  getById: jest.fn(),
  getByIds: jest.fn().mockResolvedValue(product),
  delete: jest.fn(),
};

describe('GetProductByIdsUseCase', () => {
  it('should get a list of products by ids', async () => {
    const getProductByIds = new GetProductByIdsUseCase(mockProductRepository);
    const result = await getProductByIds.execute(["ids"]);
    expect(result).toBe(product);
  });
});
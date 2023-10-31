import "reflect-metadata"
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { CreateOrUpdateProductUseCase } from "../../core/applications/usecases/product/CreateOrUpdateProductUseCase";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { GetProductByCategoryUseCase } from "../../core/applications/usecases/product/GetProductByCategoryUseCase";

const product: IProduct = {
  name: "Test",
  value: 100.0,
  amount: 20,
  orders: [],
  createdAt: new Date(),
  updatedAt: null,
  category: EProductCategory.MAIN_DISH
};

const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn(),
  getByCategory: jest.fn().mockResolvedValue(product),
  getById: jest.fn(),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('GetProductByCategoryUseCase', () => {
  it('should get a list of products by category', async () => {
    const getProductByCategory = new GetProductByCategoryUseCase(mockProductRepository);
    const result = await getProductByCategory.execute(EProductCategory.MAIN_DISH);
    expect(result).toBe(product);
  });
});
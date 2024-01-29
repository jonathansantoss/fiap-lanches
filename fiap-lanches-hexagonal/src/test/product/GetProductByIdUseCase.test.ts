import "reflect-metadata"
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { GetProductByIdUseCase } from "../../core/applications/usecases/product/GetProductByIdUseCase";

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
  getByCategory: jest.fn(),
  getById: jest.fn().mockResolvedValue(product),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('GetProductByIdUseCase', () => {
  it('should get a products by id', async () => {
    const getProductByIds = new GetProductByIdUseCase(mockProductRepository);
    const result = await getProductByIds.execute("ids");
    expect(result).toBe(product);
  });
});
import "reflect-metadata"
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { CreateOrUpdateProductUseCase } from "../../core/applications/usecases/product/CreateOrUpdateProductUseCase";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";

const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn().mockResolvedValue('Product saved with success'),
  getByCategory: jest.fn(),
  getById: jest.fn(),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('CreateOrUpdateProductUseCase', () => {
  it('should create product', async () => {
    const createOrUpdateProductUseCase = new CreateOrUpdateProductUseCase(mockProductRepository);

    const product: IProduct = {
      name: "Test",
      value: 100.0,
      amount: 20,
      orders: [],
      createdAt: new Date(),
      updatedAt: null,
      category: EProductCategory.MAIN_DISH
    };

    const result = await createOrUpdateProductUseCase.execute(product);
    expect(result).toBe('Product saved with success');
  });
});
import "reflect-metadata"
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
import { CreateOrUpdateProductService } from "../../services/impl/product/CreateOrUpdateProductService";

const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn().mockResolvedValue('Product saved with success'),
  getByCategory: jest.fn(),
  getById: jest.fn(),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('CreateOrUpdateProductService', () => {
  it('should create product', async () => {
    const createOrUpdateProductService = new CreateOrUpdateProductService(mockProductRepository);

    const product: IProduct = {
      name: "Test",
      value: 100.0,
      amount: 20,
      orders: [],
      promotions: null,
      promotionValue: null,
      createdAt: new Date(),
      updatedAt: null,
      category: EProductCategory.MAIN_DISH
    };

    const result = await createOrUpdateProductService.execute(product);
    expect(result).toBe('Product saved with success');
  });
});
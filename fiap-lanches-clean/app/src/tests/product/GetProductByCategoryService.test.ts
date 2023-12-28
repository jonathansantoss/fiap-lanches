import "reflect-metadata"
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
import { GetProductByCategoryService } from "../../services/impl/product/GetProductByCategoryService";

const product: IProduct = {
  name: "Test",
  value: 100.0,
  amount: 20,
  promotions: null,
  promotionValue: null,
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

describe('GetProductByCategoryService', () => {
  it('should get a list of products by category', async () => {
    const getProductByCategory = new GetProductByCategoryService(mockProductRepository);
    const result = await getProductByCategory.execute(EProductCategory.MAIN_DISH);
    expect(result).toBe(product);
  });
});
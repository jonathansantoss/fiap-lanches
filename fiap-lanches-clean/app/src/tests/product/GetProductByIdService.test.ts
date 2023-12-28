import "reflect-metadata"
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
import { GetProductByIdService } from "../../services/impl/product/GetProductByIdService";

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


const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn(),
  getByCategory: jest.fn(),
  getById: jest.fn().mockResolvedValue(product),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('GetProductByIdService', () => {
  it('should get a products by id', async () => {
    const getProductByIds = new GetProductByIdService(mockProductRepository);
    const result = await getProductByIds.execute("ids");
    expect(result).toBe(product);
  });
});
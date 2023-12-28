import "reflect-metadata"
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
import { GetProductByIdsService } from "../../services/impl/product/GetProductByIdsService";

const product: IProduct[] = [{
  name: "Test",
  value: 100.0,
  amount: 20,
  orders: [],
  promotions: null,
  promotionValue: null,
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

describe('GetProductByIdsService', () => {
  it('should get a list of products by ids', async () => {
    const getProductByIds = new GetProductByIdsService(mockProductRepository);
    const result = await getProductByIds.execute(["ids"]);
    expect(result).toBe(product);
  });
});
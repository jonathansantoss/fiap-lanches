import "reflect-metadata"
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
import { DeleteProductService } from "../../services/impl/product/DeleteProductService";

const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn(),
  getByCategory: jest.fn(),
  getById: jest.fn(),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('DeleteProductService', () => {
  it('should delete product', async () => {
    const deleteProduct = new DeleteProductService(mockProductRepository);

    await deleteProduct.execute("id");
    expect(mockProductRepository.delete).toHaveBeenCalled();
  });
});
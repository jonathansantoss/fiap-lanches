import "reflect-metadata"
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { DeleteProductUseCase } from "../../core/applications/usecases/product/DeleteProductUseCase";

const mockProductRepository: IProductRepository = {
  saveOrUpdate: jest.fn(),
  getByCategory: jest.fn(),
  getById: jest.fn(),
  getByIds: jest.fn(),
  delete: jest.fn(),
};

describe('DeleteProductUseCase', () => {
  it('should delete product', async () => {
    const deleteProduct = new DeleteProductUseCase(mockProductRepository);

    await deleteProduct.execute("id");
    expect(mockProductRepository.delete).toHaveBeenCalled();
  });
});
import { IProduct } from "../../domain/entities/IProduct.entity";
import { IProductRepository } from "../ports/IProduct.repository";

const uuid = require('uuid');

class ProductService {
    constructor(private readonly productRepository: IProductRepository) { }

    async saveProduct(product: IProduct): Promise<string> {
        product.id = uuid.v4()
        return await this.productRepository.save(product)
    }
}

export { ProductService }
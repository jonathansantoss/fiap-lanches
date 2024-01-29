import { IProductRepository } from "../../../repositories/interfaces/IProductRepository"

interface IDeleteProductService {

    execute(id: string, productRepository: IProductRepository): Promise<void>
}

export { IDeleteProductService }
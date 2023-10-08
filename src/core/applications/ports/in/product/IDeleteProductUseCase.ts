

interface IDeleteProductUseCase {

    execute(id: string): Promise<void>
}

export { IDeleteProductUseCase }
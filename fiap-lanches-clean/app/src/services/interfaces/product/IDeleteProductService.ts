interface IDeleteProductService {

    execute(id: string): Promise<void>
}

export { IDeleteProductService }
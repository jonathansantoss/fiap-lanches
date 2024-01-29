
interface IDataSource {
    save(entity: any): Promise<any>
    delete(id: string): Promise<void>
    findOneBy(fieldName: string, id: string): Promise<any>
    findOne(id: string): Promise<any>
    update(entity: any): Promise<void>
    findAll(): Promise<any[]>
    deleteOneBy(fieldName: string, value: any): Promise<any>
    findBy(fieldName: string, value: any, orderBy: any): Promise<any>
    findByFields(criterias: Array<{ field: string; value: any }>, orderBy: any): Promise<any>
}

export { IDataSource };

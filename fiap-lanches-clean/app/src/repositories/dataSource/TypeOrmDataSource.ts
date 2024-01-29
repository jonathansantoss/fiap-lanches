import { Repository } from "typeorm";
import { IDataSource } from "./IDataSource";

class TypeOrmDataSource implements IDataSource {

    private repository: Repository<any>;

    constructor(repository: Repository<any>) {
        this.repository = repository;
    }

    async save(entity: any): Promise<any> {
        const entityCreated = !entity.id ? this.repository.create(entity) : entity;
        return await this.repository.save(entityCreated);
    }
    async delete(id: any): Promise<void> {
        await this.repository.delete({
            id,
        });
    }

    async update(entity: any): Promise<void> {
        await this.repository.save(entity);
    }

    async findAll(): Promise<any[]> {
        return await this.repository.find();
    }

    async findOneBy(fieldName: string, value: any): Promise<any> {
        const query = {};
        query[fieldName] = value;

        const entity = await this.repository.findOne({
            where: query,
        });

        return entity;
    }

    async findBy(fieldName: string, value: any, orderBy: any): Promise<any> {
        const query = {};
        query[fieldName] = value;

        const entity = await this.repository.find({
            where: query,
            order: orderBy
        });

        return entity;
    }


    async findByFields(criterias: Array<{ field: string; value: any }>, orderBy: any): Promise<any> {
        const query = {};

        criterias.forEach(criteria => {
            query[criteria.field] = criteria.value;
        });

        const entity = await this.repository.find({
            where: query,
            order: orderBy
        });

        return entity;
    }

    async findOne(id: any): Promise<any> {

        const entity = await this.repository.findOne({
            where: {
                id
            },
        });

        return entity;
    }



    async deleteOneBy(fieldName: string, value: any): Promise<any> {
        const query = {};
        query[fieldName] = value;

        const entity = await this.repository.delete(query);

        return entity;
    }

}

export { TypeOrmDataSource };

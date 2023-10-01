import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Product } from "./Product.model";
import { IOrder } from "../../core/domain/entities/IOrder.entity";
import { EOrderStatus } from "../../core/domain/enums/EOrderStatus";

@Entity("order")
class Order implements IOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "value",
        type: "decimal",
        nullable: false,
    })
    value: number;

    @Column({
        name: "products",
        type: "int",
        nullable: false,
    })

    @ManyToMany(() => Product, (product) => product.orders)
    @JoinTable()
    products: Product[];

    @Column({
        name: "started_at",
        type: "date",
        nullable: false,
    })
    startedAt: Date;

    @Column({
        name: "delivered_at",
        type: "date",
        nullable: false,
    })
    deliveredAt: Date;

    @Column({
        name: "status",
        type: "varchar",
        nullable: false,
    })
    status: EOrderStatus;
}

export { Order };

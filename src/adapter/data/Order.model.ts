import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { Product } from "./Product.model";
import { v4 as UuidV4 } from "uuid";
import { IOrder } from "../../core/domain/entities/IOrder.entity";
import { EOrderStatus } from "../../core/domain/enums/EOrderStatus";
import { Client } from "./Client.model";

@Entity("order")
class Order implements IOrder {
  @PrimaryColumn({
    name: "id",
    type: "uuid",
  })
  id: string;

  @Column({
    name: "value",
    type: "decimal",
    nullable: false,
  })
  value: number;

  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable()
  products: Product[];

  @ManyToOne(() => Client, (client) => client.orders)
  client: Client;

  @Column({
    name: "started_at",
    type: "date",
    nullable: false,
  })
  startedAt: Date;

  @Column({
    name: "delivered_at",
    type: "date",
    nullable: true,
  })
  deliveredAt: Date;

  @Column({
    name: "status",
    type: "varchar",
    nullable: false,
  })
  status: EOrderStatus;

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}

export { Order };

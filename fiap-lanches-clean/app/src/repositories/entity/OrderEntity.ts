import {Entity, PrimaryColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Product } from "./ProductEntity";
import { v4 as UuidV4 } from "uuid";
// import { IOrder } from "../../core/domain/entities/IOrder.entity";
// import { EOrderStatus } from "../../core/domain/enums/EOrderStatus";
import { Client } from "./ClientEntity";
// import { EOrderPayment } from "../../core/domain/enums/EPayment";
import { IOrder } from "../../domain/models/IOrderModel";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";
import { EOrderPayment } from "../../domain/enums/EPayment";

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
    type: "enum",
    enum: EOrderStatus,
    nullable: false,
    default: EOrderStatus.RECEIVED,
  })
  status: EOrderStatus;

  @Column({
    name: "order_payment",
    type: "enum",
    enum: EOrderPayment,
    nullable: false,
    default: EOrderPayment.WAITING,
  })
  payment?: EOrderPayment;

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}

export { Order };

import { IOrder } from "../../domain/models/IOrderModel";
import { IClient } from "../../domain/models/IClientModel";
import { v4 as UuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Order } from "./OrderEntity";

@Entity("client")
class Client implements IClient {
  @PrimaryColumn({
    name: "id",
    type: "uuid",
  })
  id?: string;
  @Column({
    name: "cpf",
    type: "varchar",
    nullable: true,
    unique: true,
  })
  cpf?: string;
  @Column({
    name: "name",
    type: "varchar",
    nullable: true,
  })
  name?: string;
  @Column({
    name: "email",
    type: "varchar",
    nullable: true
  })
  email?: string;
  @OneToMany(() => Order, (order) => order.client)
  orders?: IOrder[];

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}

export { Client };

import { Entity, PrimaryColumn, Column, ManyToMany } from "typeorm";
import { v4 as UuidV4 } from "uuid";
import { Order } from "./Order.model";
import { IProduct } from "../../core/domain/entities/IProduct.entity";
import { EProductCategory } from "../../core/domain/enums/EProductCategory";

@Entity("product")
class Product implements IProduct {
  @PrimaryColumn({
    name: "id",
    type: "uuid",
  })
  id: string;

  @Column({
    name: "name",
    type: "varchar",
    nullable: false,
  })
  name: string;

  @Column({
    name: "value",
    type: "decimal",
    nullable: false,
  })
  value: number;

  @Column({
    name: "amount",
    type: "int",
    nullable: false,
  })
  amount: number;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @Column({
    name: "product_category",
    type: "string",
    nullable: false,
  })
  category: EProductCategory;

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}

export { Product };


import { Entity, PrimaryColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { v4 as UuidV4 } from "uuid";
import { Order } from "./OrderEntity";
// import { IProduct } from "../../core/domain/entities/IProduct.entity";
// import { EProductCategory } from "../../core/domain/enums/EProductCategory";
import { IProduct } from "../../domain/models/IProductModel";
import { EProductCategory } from "../../domain/enums/EProductCategory";
import { Promotion } from "./PromotionEntity";

@Entity("product")
class Product implements IProduct {
  @PrimaryColumn({
    name: "id",
    type: "uuid",
  })
  id?: string;

  @Column({
    name: "name",
    type: "varchar",
    nullable: false,
  })
  name: string;

  @OneToMany(() => Promotion, promotion => promotion.product)
  promotions: Promotion[];

  @Column({
    name: "value",
    type: "decimal",
    nullable: false,
  })
  value: number;

  @Column({
    name: "promotion_value",
    type: "decimal",
    nullable: true,
  })
  promotionValue: number;
  
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
    type: "enum",
    enum: EProductCategory,
    nullable: false,
  })
  category: EProductCategory;

  @Column({
    name: "created_at",
    type: "date",
    nullable: false,
  })
  createdAt: Date;

  @Column({
    name: "updated_at",
    type: "date",
    nullable: true,
  })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}
export { Product };

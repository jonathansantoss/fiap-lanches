
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IPromotion } from "../../core/domain/entities/IPromotion";
import { EPromotionStatus } from "../../core/domain/enums/EPromotionStatus";
import { Product } from "./Product.model";

@Entity("promotion")
class Promotion implements IPromotion {
    @PrimaryColumn({
        name: "id",
        type: "uuid",
        default: () => "uuid_generate_v4()"
    })
    id?: string;

    @ManyToOne(() => Product, product => product.promotions)
    product: Product;

    @Column({
        name: "start_at",
        type: "date",
        nullable: false
    })
    startAt: Date;

    @Column({
        name: "end_at",
        type: "date",
        nullable: true
    })
    endAt: Date;

    @Column({
        name: "created_at",
        type: "date",
        nullable: true
    })
    createdAt: Date;

    @Column({
        name: "updated_at",
        type: "date",
        nullable: true
    })
    updatedAt: Date;

    @Column({
        name: "status",
        type: "enum",
        enum: EPromotionStatus,
        nullable: false
    })
    status: EPromotionStatus;
    
    @Column({
        name: "promotion_value",
        type: "decimal",
        nullable: false
    })
    promotionValue: number;
}
export { Promotion };

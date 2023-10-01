import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as UuidV4 } from "uuid";

@Entity("produto")
class Produto {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    name: "nome",
    type: "varchar",
    nullable: false,
  })
  nome: string;

  @Column({
    name: "valor",
    type: "decimal",
    nullable: false,
  })
  valor: number;

  @Column({
    name: "quantidade",
    type: "int",
    nullable: false,
  })
  quantidade: number;

  constructor() {
    if (!this.id) {
      this.id = UuidV4();
    }
  }
}

export { Produto };

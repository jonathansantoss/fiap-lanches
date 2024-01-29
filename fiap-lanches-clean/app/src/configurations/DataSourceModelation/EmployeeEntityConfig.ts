import { IEmployee } from "../../domain/models/IEmployeeModel";

import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("employee")
class Employee implements IEmployee {
  @PrimaryColumn({
    name: "cpf",
    type: "varchar",
  })
  cpf: string;
  @Column({
    name: "name",
    type: "varchar",
    nullable: false,
  })
  name: string;
  @Column({
    name: "email",
    type: "varchar",
    nullable: false,
    unique: true,
  })
  email: string;
}

export { Employee };

import "reflect-metadata";
import { DataSource } from "typeorm";
import { logger } from "./WinstonLog";
import { Promotion } from "../repositories/entity/PromotionEntity";
import { Product } from "../repositories/entity/ProductEntity";
import { Order } from "../repositories/entity/OrderEntity";
import { Client } from "../repositories/entity/ClientEntity";
import { Employee } from "../repositories/entity/EmployeeEntity";

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Promotion, Product, Order, Client, Employee],
  subscribers: [],
  migrations: [],
});
// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: process.env.POSTGRES_HOST,
//   port: 80,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   synchronize: true,
//   logging: true,
//   entities: [Promotion, Product, Order, Client, Employee],
//   subscribers: [],
//   migrations: [],
// });

AppDataSource.initialize()
  .then(() => logger.info("Database initialized!"))
  .catch((error) => logger.error("Database with error: " + error));

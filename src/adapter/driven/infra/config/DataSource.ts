import "reflect-metadata";
import { DataSource } from "typeorm";
import { logger } from './WinstonLog';
import { Product } from "../../../data/Product.model";
import { Order } from "../../../data/Order.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Product, Order],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => logger.info("Database initialized!"))
  .catch((error) => logger.error("Database with error: " + error));

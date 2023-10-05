import { container } from "tsyringe";
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { ProductRepository } from "../../adapter/driven/infra/repositories/Product.repository";
import { ClientRepository } from "../../adapter/driven/infra/repositories/Client.repository";
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { OrderRepository } from "../../adapter/driven/infra/repositories/Order.repository";
import { IOrderRepository } from "../../core/applications/ports/out/order/IOrder.repository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
);

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);

export { container };

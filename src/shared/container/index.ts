import { container } from "tsyringe";
import { IProductRepository } from "../../core/applications/ports/out/product/IProduct.repository";
import { ProductRepository } from "../../adapter/driven/infra/repositories/Product.repository";
import { ClientRepository } from "../../adapter/driven/infra/repositories/Client.repository";
import { IClientRepository } from "../../core/applications/ports/out/client/IClient.repository";
import { OrderRepository } from "../../adapter/driven/infra/repositories/Order.repository";
import { IOrderRepository } from "../../core/applications/ports/out/order/IOrder.repository";
import { IGetProductByIdUseCase } from "../../core/applications/ports/in/product/IGetProductByIdUseCase";
import { GetProductByIdUseCase } from "../../core/applications/usecases/product/GetProductByIdUseCase";
import { IGetProductByIdsUseCase } from "../../core/applications/ports/in/product/IGetProductByIdsUseCase";
import { GetProductByIdsUseCase } from "../../core/applications/usecases/product/GetProductByIdsUseCase";
import { IFindClientByCpfUseCase } from "../../core/applications/ports/in/client/IFindClientByCpfUseCase";
import { FindClientByCpfUseCase } from "../../core/applications/usecases/client/FindClientByCpfUseCase";
import { IGetOrderByIdUseCase } from "../../core/applications/ports/in/order/IGetOrderByIdUseCase";
import { GetOrderByIdUseCase } from "../../core/applications/usecases/order/GetOrderByIdUseCase";

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

container.registerSingleton<IFindClientByCpfUseCase>(
  "FindClientByCpfUseCase",
  FindClientByCpfUseCase
);

container.registerSingleton<IGetProductByIdUseCase>(
  "GetProductByIdUseCase",
  GetProductByIdUseCase
);

container.registerSingleton<IGetProductByIdsUseCase>(
  "GetProductByIdsUseCase",
  GetProductByIdsUseCase
);

container.registerSingleton<IGetProductByIdsUseCase>(
  "GetProductByIdsUseCase",
  GetProductByIdsUseCase
);

container.registerSingleton<IGetOrderByIdUseCase>(
  "GetOrderByIdUseCase",
  GetOrderByIdUseCase
);



export { container };

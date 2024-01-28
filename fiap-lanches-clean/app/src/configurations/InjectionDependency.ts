import { container } from "tsyringe";
import { IProductRepository } from "../repositories/interfaces/IProductRepository";
import { ProductRepository } from "../repositories/impl/ProductRepository";
import { ClientRepository } from "../repositories/impl/ClientRepository";
import { IClientRepository } from "../repositories/interfaces/IClientRepository";
import { OrderRepository } from "../repositories/impl/OrderRepository";
import { IOrderRepository } from "../repositories/interfaces/IOrderRepository";
import { IEmployeeRepository } from "../repositories/interfaces/IEmployeeRepository";
import { EmployeeRepository } from "../repositories/impl/EmployeeRepository";
import { IPromotionRepository } from "../repositories/interfaces/IPromotionRepository";
import { PromotionRepository } from "../repositories/impl/PromotionRepository";
import { IGetProductByIdService } from "../services/interfaces/product/IGetProductByIdService";
import { GetProductByIdService } from "../services/impl/product/GetProductByIdService";
import { IGetProductByIdsService } from "../services/interfaces/product/IGetProductByIdsService";
import { GetProductByIdsService } from "../services/impl/product/GetProductByIdsService";
import { IFindClientByCpfService } from "../services/interfaces/client/IFindClientByCpfService";
import { FindClientByCpfService } from "../services/impl/client/FindClientByCpfService";
import { IGetOrderByIdService } from "../services/interfaces/order/IGetOrderByIdService";
import { GetOrderByIdService } from "../services/impl/order/GetOrderByIdService";
import { IGetActivePromotionsByProductIdService } from "../services/interfaces/promotion/IGetActivePromotionsByProductIdService";
import { GetActivePromotionsByProductIdService } from "../services/impl/promotion/GetActivePromotionsByProductIdService";
import { GetPromotionByIdService } from "../services/impl/promotion/GetPromotionByIdService";
import { IGetPromotionByIdService } from "../services/interfaces/promotion/IGetPromotionByIdService";
import { ICancelPromotionService } from "../services/interfaces/promotion/ICancelPromotionService";
import { CancelPromotionService } from "../services/impl/promotion/CancelPromotionService";
import { ICreateOrUpdatePromotionService } from "../services/interfaces/promotion/ICreateOrUpdatePromotionService";
import { CreateOrUpdatePromotionService } from "../services/impl/promotion/CreateOrUpdatePromotionService";
import { ICreateOrUpdateProductService } from "../services/interfaces/product/ICreateOrUpdateProductService";
import { CreateOrUpdateProductService } from "../services/impl/product/CreateOrUpdateProductService";
import { IGetAllUnfinishedOrdersService } from "../services/interfaces/order/IGetAllUnfinishedOrdersService";
import { GetAllUnfinishedOrdersService } from "../services/impl/order/GetAllUnfinishedOrdersService";
import { IWebHookPaymentService } from "../services/interfaces/payment/IWebHookPaymentService";
import { WebHookPaymentService } from "../services/impl/payment/WebHookPaymentService";
import { IGetPaymentStatusByOrderIdService } from "../services/interfaces/payment/IGetPaymentStatusByOrderIdService";
import { GetPaymentStatusByOrderIdService } from "../services/impl/payment/GetPaymentStatusByOrderIdService";

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

container.registerSingleton<IPromotionRepository>(
  "PromotionRepository",
  PromotionRepository
);

container.registerSingleton<IEmployeeRepository>(
  "EmployeeRepository",
  EmployeeRepository
);

container.registerSingleton<IFindClientByCpfService>(
  "FindClientByCpfService",
  FindClientByCpfService
);

container.registerSingleton<IGetProductByIdService>(
  "GetProductByIdService",
  GetProductByIdService
);

container.registerSingleton<IGetProductByIdsService>(
  "GetProductByIdsService",
  GetProductByIdsService
);

container.registerSingleton<IGetProductByIdsService>(
  "GetProductByIdsService",
  GetProductByIdsService
);

container.registerSingleton<IGetOrderByIdService>(
  "GetOrderByIdService",
  GetOrderByIdService
);

container.registerSingleton<IGetActivePromotionsByProductIdService>(
  "GetActivePromotionsByProductIdService",
  GetActivePromotionsByProductIdService
);

container.registerSingleton<IGetPromotionByIdService>(
  "GetPromotionByIdService",
  GetPromotionByIdService
);

container.registerSingleton<ICancelPromotionService>(
  "CancelPromotionService",
  CancelPromotionService
);

container.registerSingleton<ICreateOrUpdatePromotionService>(
  "CreateOrUpdatePromotionService",
  CreateOrUpdatePromotionService
);

container.registerSingleton<ICreateOrUpdateProductService>(
  "CreateOrUpdateProductService",
  CreateOrUpdateProductService
);

container.registerSingleton<IGetAllUnfinishedOrdersService>(
  "GetAllUnfinishedOrdersService",
  GetAllUnfinishedOrdersService
)

container.registerSingleton<IWebHookPaymentService>(
  "WebHookPaymentService",
  WebHookPaymentService
)

container.registerSingleton<IGetPaymentStatusByOrderIdService>(
  "GetPaymentStatusByOrderIdService",
  GetPaymentStatusByOrderIdService
)


export { container };

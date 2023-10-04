import { IOrder } from "./IOrder.entity";

interface IClient {
  id: string;
  cpf?: string;
  name?: string;
  email?: string;
  orders: IOrder[];
}

export { IClient };

import { IOrder } from "./IOrderModel";

interface IClient {
  id?: string;
  cpf?: string;
  name?: string;
  email?: string;
  orders?: IOrder[];
}

export { IClient };

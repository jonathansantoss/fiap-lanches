import { IOrder } from "../../../domain/models/IOrderModel";

interface IGetAllUnfinishedOrdersService {
    execute(): Promise<IOrder[]>;
}

export {IGetAllUnfinishedOrdersService};
import { IPromotion } from "../../../domain/models/IPromotionModel";

interface IGetPromotionByIdService {
    execute(id: string): Promise<IPromotion>;
}

export { IGetPromotionByIdService };
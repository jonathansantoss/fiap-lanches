
interface ICancelPromotionService {
    execute(id: string): Promise<void>;
}

export { ICancelPromotionService };
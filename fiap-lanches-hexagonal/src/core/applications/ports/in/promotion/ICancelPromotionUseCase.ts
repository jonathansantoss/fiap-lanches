
interface ICancelPromotionUseCase {
    execute(id: string): Promise<void>;
}

export { ICancelPromotionUseCase };
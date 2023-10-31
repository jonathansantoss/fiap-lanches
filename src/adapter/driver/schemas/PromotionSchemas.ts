
import { z } from "zod";
export const SavePromotionSchema = z
  .object({
    productId: z.string(),
    promotionValue: z.number()
  })
  .required();


export const ValidatePromotionId = z
  .object({
    id: z.string(),
  })
  .required();
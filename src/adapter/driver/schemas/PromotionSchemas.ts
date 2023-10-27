
import { z } from "zod";
export const SavePromotionSchema = z
  .object({
    productId: z.string(),
    promotionValue: z.number()
  })
  .required();

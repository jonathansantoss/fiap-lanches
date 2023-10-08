import { z } from "zod";
import { EProductCategory } from "../../../core/domain/enums/EProductCategory";

export const GetProductByCategorySchema = z
    .object({
        category: z.enum([
            EProductCategory.DRINK,
            EProductCategory.MAIN_DISH,
            EProductCategory.SIDE_DISH,
        ]),
    })
    .required();


export const SaveProductSchema = z
  .object({
    name: z.string(),
    value: z.number(),
    amount: z.number(),
    category: z.enum([
      EProductCategory.DRINK,
      EProductCategory.MAIN_DISH,
      EProductCategory.SIDE_DISH,
    ]),
  })
  .required();


export const ProductIdSchema = z.object(
    {
        id: z.string()
    }
).required()


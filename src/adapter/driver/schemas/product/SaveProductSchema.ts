import { z } from "zod";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";

const SaveProductSchema = z
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

export { SaveProductSchema };

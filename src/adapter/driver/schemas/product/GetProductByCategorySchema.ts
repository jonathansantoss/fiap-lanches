import { z } from "zod";
import { EProductCategory } from "../../../../core/domain/enums/EProductCategory";

const GetProductByCategorySchema = z
    .object({
        category: z.enum([
            EProductCategory.DRINK,
            EProductCategory.MAIN_DISH,
            EProductCategory.SIDE_DISH,
        ]),
    })
    .required();

export { GetProductByCategorySchema };

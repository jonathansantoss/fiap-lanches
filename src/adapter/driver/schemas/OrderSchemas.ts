import { z } from "zod";

export const SaveOrderSchema = z
    .object({
        value: z.number(),
        clientCpf: z.string().nullable(),
        productsIds: z.array(z.string()).refine((arr) => arr.length > 0, { message: "O Products list can't be empty" })
    }).strict(); 
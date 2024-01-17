import { z } from "zod";
import { EOrderStatus } from "../../domain/enums/EOrderStatus";

export const SaveOrderSchema = z
    .object({
        value: z.number(),
        clientCpf: z.string().nullable(),
        productsIds: z.array(z.string()).refine((arr) => arr.length > 0, { message: "O Products list can't be empty" })
    }).strict();


export const UpdateStatusSchema = z
    .object({
        id: z.string(),
        status: z.enum([
            EOrderStatus.CANCELLED,
            EOrderStatus.DONE,
            EOrderStatus.FINISHED,
            EOrderStatus.PREPARING,
            EOrderStatus.RECEIVED
        ]),
    }).required().strict();

export const GetByStatusSchema = z
    .object({
        status: z.enum([
            EOrderStatus.CANCELLED,
            EOrderStatus.DONE,
            EOrderStatus.FINISHED,
            EOrderStatus.PREPARING,
            EOrderStatus.RECEIVED
        ])
    }).required().strict(); 

export const GetAllUnfinishedOrder = z.object({
    id: z.string()
})
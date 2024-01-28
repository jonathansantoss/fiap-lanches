import { z } from "zod";

export const paymentByOrderIdSchema = z
  .object({
    orderId: z.string().uuid(),
  })
  .required();

export const webHookPaymentSchema = z
  .object({
    statusCode: z.number(),
    message: z.string(),
    payer: z.object({
      name: z.string(),
      document: z.string(),
      email: z.string(),
      bank: z.string()
    }),
    payment: z.object({
      order: z.string(),
      paidAt: z.string(),
      value: z.number(),
      paymentMethod: z.string()
    })
  }).required();
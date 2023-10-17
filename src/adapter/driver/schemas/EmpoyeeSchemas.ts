import { z } from "zod";

export const createEmployeeSchema = z.object({
  cpf: z.string().length(11),
  name: z.string().min(5).max(100),
  email: z.string().email(),
});

export const deleteEmployeeSchema = z
  .object({
    cpf: z.string().length(11),
  })
  .required();

export const updateEmployeeSchema = z
  .object({
    id: z.string(),
    cpf: z.string().length(11),
    name: z.string().max(200),
    email: z.string().email(),
  })
  .required();

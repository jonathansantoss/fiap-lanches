import { z } from "zod";

export const createClientSchema = z.object({
  cpf: z.string().length(11),
  name: z.string().min(5).max(100),
  email: z.string().email(),
});

export const deleteClientSchema = z
  .object({
    cpf: z.string().length(11),
  })
  .required();

export const updateClientSchema = z
  .object({
    id: z.string(),
    cpf: z.string().length(11),
    name: z.string().max(200),
    email: z.string().email(),
  })
  .required();

export const getClientSchema = z
  .object({
    cpf: z.string().length(11),
  })
  .required();

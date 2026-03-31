import { z } from "zod";

export const authSignInSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z
    .string()
    .includes(" ", { message: "A senha não pode conter espaços" })
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres" }),
});

export const authLoginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .includes(" ", { message: "A senha não pode conter espaços" })
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres" }),
});

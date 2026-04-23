import { z } from "zod";

export const authSignInSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres" })
    .refine((val) => !val.includes(" "), { message: "A senha não pode conter espaços" }),
});

export const authLoginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres" })
    .refine((val) => !val.includes(" "), { message: "A senha não pode conter espaços" }),
});

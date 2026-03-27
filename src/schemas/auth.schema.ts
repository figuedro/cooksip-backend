import { z } from "zod";

export const authSignInSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export const authLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

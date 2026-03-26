import { z } from "zod";

export const authSignInSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate = (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(422).json({ message: "Erro de validação",errors: result.error.flatten().fieldErrors });
    }

    req.body = result.data; // replaces raw body with typed, parsed data

    next();
  };

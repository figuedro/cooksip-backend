import { Request, Response } from "express";
import * as authService from "../services/authService";
import { authSignInSchema } from "../schemas/auth.schema";

export const loginUser = async (req: Request, res: Response) => {};

export const logoutUser = async (req: Request, res: Response) => {};

export const createUser = async (req: Request, res: Response) => {
  const parsedUser = authSignInSchema.safeParse(req.body);

  if (!parsedUser.success) {
    return res.status(400).json({ message: parsedUser.error.flatten });
  }

  const user = await authService.createUser(parsedUser.data);

  if (!user) {
    return res.status(409).json({ message: "User already exists" });
  }

  res.status(201).json(user);
};

import { Request, Response } from "express";
import * as authService from "../services/authService";
import { authSignInSchema, authLoginSchema } from "../schemas/auth.schema";

export const createUser = async (req: Request, res: Response) => {
  const parsedUser = authSignInSchema.safeParse(req.body);

  if (!parsedUser.success) {
    return res.status(400).json({ errors: parsedUser.error.issues.map((i) => i.message) });
  }

  const user = await authService.createUser(parsedUser.data);

  if (!user) {
    return res.status(409).json({ message: "Usuário já existe" });
  }

  res.status(201).json(user);
};

export const loginUser = async (req: Request, res: Response) => {
  const parsedUser = authLoginSchema.safeParse(req.body);

  if (!parsedUser.success) {
    return res.status(400).json({ message: parsedUser.error.flatten });
  }

  const result = await authService.loginUser(parsedUser.data);

  if (!result) {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ user: result.user, token: result.token });
};

export const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout bem-sucedido" });
};

import { Request, Response } from "express";
import * as authService from "../services/authService";

export const loginUser = async (req: Request, res: Response) => {
  
};

export const logoutUser = async (req: Request, res: Response) => {
  
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = await authService.createUser({ name, email, password });

  if (!user) {
    return res.status(409).json({ message: "User already exists" });
  }

  res.status(201).json(user);
};


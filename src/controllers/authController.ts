import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  
};

export const logoutUser = async (req: Request, res: Response) => {
  
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
};


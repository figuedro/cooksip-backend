import { Request, Response, NextFunction } from "express";
import { verifyJwtToken } from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const isDev = process.env.NODE_ENV === "development";

  const token = isDev
    ? req.headers.authorization?.split(" ")[1]
    : req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Token de autenticação ausente" });
  }

  try {
    if (!JWT_SECRET) {
      return res.status(500).json({ message: "Erro de configuração do servidor" });
    }

    const decoded = verifyJwtToken(token);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token de autenticação inválido" });
  }
};

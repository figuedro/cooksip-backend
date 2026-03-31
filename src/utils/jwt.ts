import * as jwt from "jsonwebtoken";
import type { StringValue } from "ms";

interface JwtPayload {
  userId: string;
  email: string;
}

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || "7d") as StringValue;

export const generateJwtToken = (payload: JwtPayload): string => {
  if (!JWT_SECRET) {
    throw new Error("Erro ao configurar ambiente");
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyJwtToken = (token: string): JwtPayload | null => {
  if (!JWT_SECRET) {
    throw new Error("Erro ao configurar ambiente");
  }
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};

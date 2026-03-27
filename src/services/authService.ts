import { prisma } from "../config/db";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const createUser = async ({ name, email, password }: { name: string; email: string; password: string }) => {
  const userExist = await prisma.user.findUnique({ where: { email } });

  if (userExist) {
    return null;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  const jwtToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token: jwtToken };
};

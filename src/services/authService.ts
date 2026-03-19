import { prisma } from "../config/db";
import * as bcrypt from "bcrypt";

export const createUser = async ({ name, email, password }: { name: string; email: string; password: string }) => {
  const userExist = await prisma.user.findUnique({ where: { email } });

  if (userExist) {
    return
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

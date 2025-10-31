import prisma from "../../config/prisma.js";
import bcrypt from "bcryptjs";

export const getAll = async () => {
  return prisma.user.findMany();
};

export const create = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    const error: any = new Error("Email already registered");
    error.status = 409; 
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

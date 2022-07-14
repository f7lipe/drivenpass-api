import { prisma } from "../config/database.js";

export async function createUser(email: string, password: string) {
  return prisma.user.create({
    data: {
      email,
      password,
    },
  });
}

export async function getUser(email: string) {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
}
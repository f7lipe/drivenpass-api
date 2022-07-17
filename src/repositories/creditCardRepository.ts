import { prisma } from "../config/database.js";
import { creditCard } from "../schemas/creditCardSchema.js";

export async function createOne(creditCard: creditCard) {
  return prisma.creditCard.create({
    data: {
      ...creditCard,
    },
  });
}
import { prisma } from "../config/database.js";
import { creditCard } from "../schemas/creditCardSchema.js";

export async function createOne(creditCard: creditCard) {
  return prisma.creditCard.create({
    data: {
      ...creditCard,
    },
  });
}

export async function getMany(id: number, userId: number) {
    let queryBuilder: Object
    if (id) queryBuilder = { where:{id} } 
    else queryBuilder = { where:{userId} }
    
    return prisma.creditCard.findMany(queryBuilder)
}
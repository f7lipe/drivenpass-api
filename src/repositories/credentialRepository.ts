import { prisma } from "../config/database.js";
import { credential } from "../schemas/credentialSchema.js";

export async function create(credential: credential) {
   const createCredential =  await prisma.credential.create({
        data: {
            ...credential
        }
    });

    return createCredential;
}
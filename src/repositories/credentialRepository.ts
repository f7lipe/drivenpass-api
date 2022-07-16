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

export async function getCredentials(id: number, userId: number) {
    let queryBuilder: Object
    if (id) queryBuilder = { where:{id} } 
    else queryBuilder = { where:{userId} }
    
    const credentials = await prisma.credential.findMany(queryBuilder);

    return credentials;
}

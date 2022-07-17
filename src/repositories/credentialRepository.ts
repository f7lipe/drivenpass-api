import { prisma } from "../config/database.js";
import { credential } from "../schemas/credentialSchema.js";

export async function createOne(credential: credential) {
   const createCredential =  await prisma.credential.create({
        data: {
            ...credential
        }
    });

    return createCredential;
}

export async function getMany(id: number, userId: number) {
    let queryBuilder: Object
    if (id) queryBuilder = { where:{id} } 
    else queryBuilder = { where:{userId} }
    
    const credentials = await prisma.credential.findMany(queryBuilder);

    return credentials;
}

export async function deleteOne(id: number) {

    await prisma.credential.delete({
        where: {
            id
        }
    });

}
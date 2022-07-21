import { faker }  from '@faker-js/faker';

import { prisma } from '../../src/config/database.js';
import { credential } from '../../src/schemas/credentialSchema.js';

export function createCredential(){
    return{
        title: faker.internet.domainWord(),
        url: faker.internet.url(),
        username: faker.internet.userName(),
        password: faker.internet.password()
    }
}

export async function createCredentials(credential: credential, userId: number){
    const createdCredential = await prisma.credential.create({
        data: {...credential, userId}   
    });
    return createdCredential;
}
import { credential } from "../schemas/credentialSchema";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { cryptr } from "../config/cryptConfig.js";

export async function createCredential(credential: credential){
    const ecnryptedPassword = cryptr.encrypt(credential.password);
    const newCredential = {...credential, password: ecnryptedPassword}
    const createCredential = await credentialRepository.create(newCredential);     
    return createCredential;  
}

export async function getCredentials(credentialId: number, userId: number){
    const credentials = await credentialRepository.getCredentials(credentialId, userId);
    const userCredentials = credentials.filter(credential => credential.userId === userId);
    if (userCredentials.length === 0) throw {
        status: 404,
        message: "Credentials not found. Please verify if credential id is correct or is yours."
    }

    const userCredentialsWithDecryptedPassword = userCredentials.map<credential>(credential => {
        const decryptedPassword = cryptr.decrypt(credential.password);
        return {...credential, password: decryptedPassword}
    })
    return userCredentialsWithDecryptedPassword;
}

export async function deleteCredential(credentialId: number, userId: number){
    const credentials = await getCredentials(credentialId, userId);
    if (credentials.length === 0) throw {
        status: 404,
        message: "Credentials not found. Please verify if credential id is correct or is yours."
    }

    await credentialRepository.deleteCredential(credentialId);
}
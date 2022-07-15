import { credential } from "../schemas/credentialSchema";
import * as credentialRepository from "../repositories/credentialRepository.js";
import { cryptr } from "../config/cryptConfig.js";

export async function createCredential(credential: credential){
    const ecnryptedPassword = cryptr.encrypt(credential.password);
    const newCredential = {...credential, password: ecnryptedPassword}
    const createCredential = await credentialRepository.create(newCredential);     
    return createCredential;  
}
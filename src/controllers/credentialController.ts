import { Request, Response } from 'express';
import { credential } from '../schemas/credentialSchema.js';
import * as credentialServices from '../services/credentialServices.js';


export async function createCredential(req: Request, res: Response) {
    const { userId } = res.locals.user
    const credentials: credential = {userId, ...req.body}
    const createdCredential = await credentialServices.createCredential(credentials)
    res.status(201).send({id: createdCredential.id})
}

export async function getCredential(req: Request, res: Response) {
    const { userId } = res.locals.user
    const { credentialId } = req.params
    const credentials = await credentialServices.getCredentials(parseInt(credentialId), userId)
    res.status(200).send(credentials)
}

export async function deleteCredential(req: Request, res: Response) {
    const { userId } = res.locals.user
    const { credentialId } = req.params
    await credentialServices.deleteCredential(parseInt(credentialId), userId)
    res.sendStatus(200)
}
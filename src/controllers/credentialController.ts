import { Request, Response } from 'express';
import { credential } from '../schemas/credentialSchema.js';
import * as credentialServices from '../services/credentialServices.js';


export async function createCredential(req: Request, res: Response) {
    const { userId } = res.locals.user
    const credentials: credential = {userId, ...req.body}
    const createdCredential = await credentialServices.createCredential(credentials)
    res.status(201).send({id: createdCredential.id})
}
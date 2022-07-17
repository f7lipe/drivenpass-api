import { Request, Response } from 'express';
import * as creditCardService from '../services/creditCardService.js';
import { creditCard } from '../schemas/creditCardSchema.js';

export async function create(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const creditCard: creditCard = {userId, ...req.body};
    await creditCardService.create(creditCard);
    res.sendStatus(201);
}
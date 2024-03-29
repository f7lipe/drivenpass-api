import { Request, Response } from 'express';
import * as creditCardService from '../services/creditCardService.js';
import { creditCard } from '../schemas/creditCardSchema.js';
import { testingUtil } from "../utils/testingUtil.js";

export async function create(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const creditCard: creditCard = {userId, ...req.body};
    const createdCreditCard = await creditCardService.create(creditCard);
    res.status(201).send(testingUtil(createdCreditCard));
}


export async function get(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { creditCardId } = req.params;
    const creditCards = await creditCardService.get(parseInt(creditCardId), userId);
    res.status(200).send(creditCards);
}

export async function deleteOne(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { creditCardId } = req.params;
    await creditCardService.deleteOne(parseInt(creditCardId), userId);
    res.sendStatus(200);
}
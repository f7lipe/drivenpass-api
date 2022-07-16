import { Request, Response } from 'express';
import { safeNote } from '../schemas/safeNoteSchema.js';
import * as safeNoteService from '../services/safeNoteService.js';


export async function createSafeNote(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const safeNote: safeNote = { userId, ...req.body };
    await safeNoteService.createSafeNote(safeNote);
    res.sendStatus(201);
}
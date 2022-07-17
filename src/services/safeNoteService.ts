import * as safeNoteRepository from '../repositories/safeNoteRepository.js';
import { safeNote } from "../schemas/safeNoteSchema.js";

export async function createSafeNote(safeNote: safeNote) {
    await safeNoteRepository.createOne(safeNote)
}

export async function getSafeNotes(safeNoteId: number, userId: number) {
    const safeNotes = await safeNoteRepository.getMany(safeNoteId, userId);
    const userSafeNotes = safeNotes.filter(safeNote => safeNote.userId === userId);
    if(userSafeNotes.length === 0) throw {
        status: 404,
        message: "Safe notes not found. Please verify if safe note id is correct or is yours."
    }
    return safeNotes;
}

export async function deleteSafeNote(safeNoteId: number, userId: number) {

    const safeNotes = await getSafeNotes(safeNoteId, userId);
    if(safeNotes.length === 0) throw {
        status: 404,
        message: "Safe notes not found. Please verify if safe note id is correct or is yours."
    }
    await safeNoteRepository.deleteOne(safeNoteId);
}
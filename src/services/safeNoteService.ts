import * as safeNoteRepository from '../repositories/safeNoteRepository.js';
import { safeNote } from "../schemas/safeNoteSchema.js";

export async function createSafeNote(safeNote: safeNote) {
    await safeNoteRepository.create(safeNote)
}
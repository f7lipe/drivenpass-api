import { prisma } from "../config/database.js";    
import { safeNote } from "../schemas/safeNoteSchema.js";

export async function create(safeNote: safeNote) {
    await prisma.safeNote.create({
        data: {
            ...safeNote
        }
    })

}

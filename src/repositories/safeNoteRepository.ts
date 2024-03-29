import { prisma } from "../config/database.js";    
import { safeNote } from "../schemas/safeNoteSchema.js";

export async function createOne(safeNote: safeNote) {
    return await prisma.safeNote.create({
        data: {
            ...safeNote
        }
    })

}

export async function getMany(id: number, userId: number) {
    let queryBuilder: Object
    if (id) queryBuilder = { where:{id} } 
    else queryBuilder = { where:{userId} }
    
    const safeNotes = await prisma.safeNote.findMany(queryBuilder);

    return safeNotes;
}

export async function deleteOne(id: number) {
    await prisma.safeNote.delete({
        where: {
            id
        }
    })
}
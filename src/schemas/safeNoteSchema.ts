import Joi from "joi";
import { SafeNote } from "@prisma/client";

export type safeNote = Omit<SafeNote, "id" | "createdAt" | "updatedAt">

export const safeNoteSchema = Joi.object<safeNote>({
    title: Joi.string().required().max(50),
    content: Joi.string().required().max(1000),
})
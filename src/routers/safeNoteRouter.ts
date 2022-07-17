import { Router } from "express";
import { validToken } from "../middleware/tokenValidationMiddleware.js";
import * as safeNoteSchema from "../schemas/safeNoteSchema.js";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import * as safeNoteController from "../controllers/safeNoteController.js";

const safeNoteRouter = Router();
safeNoteRouter.post(
    "/safenote",
    schemaValidator.validateSchema(safeNoteSchema.safeNoteSchema),
    validToken,
    safeNoteController.createSafeNote
)

safeNoteRouter.get(
    "/safenote/:safeNoteId",
    validToken,
    safeNoteController.getSafeNotes
)

export default safeNoteRouter
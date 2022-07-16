import { Router } from "express";
import { validToken } from "../middleware/tokenValidationMiddleware.js";
import * as safeNoteSchema from "../schemas/safeNoteSchema.js";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import { createSafeNote } from "../controllers/safeNoteController.js";

const safeNoteRouter = Router();
safeNoteRouter.post(
    "/safenote",
    schemaValidator.validateSchema(safeNoteSchema.safeNoteSchema),
    validToken,
    createSafeNote
)


export default safeNoteRouter
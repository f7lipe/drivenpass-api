import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";

const router = Router();
router.use(authRouter)
router.use(credentialRouter)
router.use(safeNoteRouter)

export default router;
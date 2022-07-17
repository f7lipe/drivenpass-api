import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";
import creditCardRouter from "./creditCardRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();
router.use(authRouter)
router.use(credentialRouter)
router.use(safeNoteRouter)
router.use(creditCardRouter)
router.use(wifiRouter)

export default router;
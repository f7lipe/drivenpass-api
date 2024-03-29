import { Router } from "express";
import {creditCardSchema} from "../schemas/creditCardSchema.js";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import { validToken } from "../middleware/tokenValidationMiddleware.js";
import * as creditCardController from "../controllers/creditCardController.js";

const creditCardRouter = Router();
creditCardRouter.post(
    "/credit-card",
    schemaValidator.validateSchema(creditCardSchema),
    validToken,
    creditCardController.create
)

creditCardRouter.get(
    "/credit-card/:creditCardId",
    validToken,
    creditCardController.get
)

creditCardRouter.delete(
    "/credit-card/:creditCardId",
    validToken,
    creditCardController.deleteOne
)

export default creditCardRouter
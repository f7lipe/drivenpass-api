import { Router } from "express";

import * as authController from "../controllers/authController.js";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import * as authSchemas from "../schemas/authSchemas.js";

const authRouter = Router();
authRouter.post(
    "/signup",
    schemaValidator.validateSchema(authSchemas.authSchema), 
    authController.signup
    );

authRouter.post(
    "/signin",
    schemaValidator.validateSchema(authSchemas.authSchema),
    authController.signin
)

export default authRouter
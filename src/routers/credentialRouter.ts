import { Router } from "express";
import * as credentialController from "../controllers/credentialController.js";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import * as tokenValidation from "../middleware/tokenValidationMiddleware.js";
import * as credentialSchema from "../schemas/credentialSchema.js";

const credentialRouter = Router();
credentialRouter.post(
    "/credential",
    schemaValidator.validateSchema(credentialSchema.credentialSchema),
    tokenValidation.validToken,
    credentialController.createCredential
)

credentialRouter.get(
    "/credential/:credentialId",
    tokenValidation.validToken,
    credentialController.getCredential
)

credentialRouter.delete(
    "/credential/:credentialId",
    tokenValidation.validToken,
    credentialController.deleteCredential
)

export default credentialRouter;
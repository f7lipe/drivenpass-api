import Router from "express";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import  {wifiSchema} from "../schemas/wifiSchema.js";
import * as wifiController from "../controllers/wifiController.js";
import { validToken } from "../middleware/tokenValidationMiddleware.js";


const wifiRouter = Router();

wifiRouter.post(
    "/wifi",
    schemaValidator.validateSchema(wifiSchema),
    validToken,
    wifiController.create
)

wifiRouter.get(
    "/wifi/:wifiId",
    validToken,
    wifiController.get
)

wifiRouter.delete(
    "/wifi/:wifiId",
    validToken,
    wifiController.deleteOne
)


export default wifiRouter;
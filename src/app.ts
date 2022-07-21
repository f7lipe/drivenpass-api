import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import handleErrors from "./middleware/errorHandlerMiddleware.js";


const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrors)

export default app;
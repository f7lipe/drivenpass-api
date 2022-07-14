import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.js";
import "./config/envConfig.js";
import handleErrors from "./middleware/errorHandlerMiddleware.js";


const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrors)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


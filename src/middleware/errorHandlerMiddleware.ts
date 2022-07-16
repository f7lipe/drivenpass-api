import { Request, Response, NextFunction } from "express";

 export default function handleErrors(
    err,
    req: Request,
    res: Response,
    next: NextFunction) {
    const {status, message} = err;
    if(err) res.status(status || 500).send(message || "Internal server error");
    next()
}



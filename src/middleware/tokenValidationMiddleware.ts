import { NextFunction, Request, Response } from "express";
import "../config/envConfig.js"
import jwt from "jsonwebtoken";

export async function validToken (req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers;

    //const validation = authSchemas.tokenSchema.validate(authorization);
    //if (validation.error) return res.status(403);

    const token = authorization?.replace('Bearer ', '').trim();
    if (!token) throw {
        status: 403,
        message: 'No token provided'
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) throw {
        status: 403,
        message: 'Invalid token'
    }


    res.locals.user = user;

    next()
}
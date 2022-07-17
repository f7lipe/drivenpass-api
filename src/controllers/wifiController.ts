import { Request, Response } from "express";
import { wifi } from "../schemas/wifiSchema.js";
import * as wifiService from "../services/wifiService.js";

export async function create(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const wifi: wifi = { userId, ...req.body };
    await wifiService.create(wifi);
    res.sendStatus(201);
}
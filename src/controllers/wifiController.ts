import { Request, Response } from "express";
import { wifi } from "../schemas/wifiSchema.js";
import * as wifiService from "../services/wifiService.js";

export async function create(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const wifi: wifi = { userId, ...req.body };
    await wifiService.create(wifi);
    res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { wifiId } = req.params;
    const wifi = await wifiService.get(parseInt(wifiId), userId);
    res.status(200).send(wifi);
}

export async function deleteOne(req: Request, res: Response) {
    const { userId } = res.locals.user;
    const { wifiId } = req.params;
    await wifiService.deleteOne(parseInt(wifiId), userId);
    res.sendStatus(204);
}
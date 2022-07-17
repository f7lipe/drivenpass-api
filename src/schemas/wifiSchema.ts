import { Wifi } from "@prisma/client";
import Joi from "joi";

export type wifi = Omit<Wifi, "id" | "createdAt" | "updatedAt">;

export const wifiSchema = Joi.object<wifi>({
    title: Joi.string().required(),
    password: Joi.string().required(),
    ssid: Joi.string().required(),
})
import Joi from "joi";

import { Credential } from "@prisma/client";

export type credential = Omit<Credential, "id" | "createdAt" | "updatedAt">;

export const credentialSchema = Joi.object<credential>({
    username: Joi.string().required(),
    password: Joi.string().required().min(1),
    url: Joi.string().uri().required(),
    title: Joi.string().required(),
})

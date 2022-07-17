import Joi from "joi";
import { CreditCard } from "@prisma/client";

export type creditCard = Omit<CreditCard, "id" | "createdAt" | "updatedAt">;



export const creditCardSchema = Joi.object<creditCard>({
    number: Joi.string().required(),
    name: Joi.string().required(),
    expiry: Joi.string().required(),
    cvv: Joi.string().required().max(3),
    password: Joi.string().required().min(4).max(8),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().required().valid("Credit", "Debit", "Both"),
    title: Joi.string().required(),
})


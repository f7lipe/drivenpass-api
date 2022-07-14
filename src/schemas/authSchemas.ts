import Joi from "joi";
import { User } from "@prisma/client";

type user = Omit<User, "id">

export const authSchema = Joi.object<user>({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(10),
})

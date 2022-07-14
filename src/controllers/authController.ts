import { Request, Response } from "express";
import * as authServices from "../services/authServices.js";

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  await authServices.signup(email, password);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;
  const token = await authServices.signin(email, password);
  res.status(200).send({token})
}

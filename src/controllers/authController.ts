import { Request, Response } from "express";
import * as authServices from "../services/authServices.js";

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  await authServices.signup(email, password);
  res.sendStatus(201);
}
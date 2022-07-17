import * as authRepository from '../repositories/authRepositories.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signup(email: string, password: string) {
  const user = await authRepository.getUser(email);
  if (user) throw {
    status: 400,
    message: 'User already exists',
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await authRepository.createUser(email, encryptedPassword);
}


export async function signin(email: string, password: string) {
  const user = await authRepository.getUser(email);
  if (!user) throw {
    status: 400,
    message: 'User does not exist',
  }
  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) throw {
    status: 400,
    message: 'Invalid password',
  }
  const token = createToken(user.id);
  return token;
}


function createToken(userId: number) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '12h',
  });
}
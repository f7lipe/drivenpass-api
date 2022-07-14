import * as authRepository from '../repositories/authRepositories.js';
import bcrypt from 'bcrypt';

export async function signup(email: string, password: string) {
  const user = await authRepository.getUser(email);
  if (user) throw {
    status: 400,
    message: 'User already exists',
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await authRepository.createUser(email, encryptedPassword);
}
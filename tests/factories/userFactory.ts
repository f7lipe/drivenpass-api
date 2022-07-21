import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';

import { prisma } from "../../src/config/database.js";


interface Login {email: string, password: string};

export function createLogin(email: string = "devinho@driven.com", passwordLength: number = 10): Login {
    return {
      email,
      password: faker.internet.password(passwordLength)
    }
  }

export async function createUser(login: Login) {
    const password = await bcrypt.hash(login.password, 10);
    const user = await prisma.user.create({
        data: {
            email: login.email,
            password
        }
    });
    return {...user, password: login.password};
}
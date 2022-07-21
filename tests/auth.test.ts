
import supertest from "supertest";
import { prisma } from "../src/config/database.js";
import * as userFactory from "./factories/userFactory.js";
import * as credentialFactory from "./factories/credentialFactory.js";

import app  from "../src/app.js";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE credentials`;
    await prisma.$executeRaw`DELETE FROM users WHERE email = 'devinho@driven.com'`;
  })


describe("Authentication tests", () => {
    it("given valid credentials, shoud create a user", async () => {
        const login = userFactory.createLogin();
        const response = await supertest(app)
            .post("/signup")
            .send(login);
        expect(response.status).toBe(201);
    })
})
  

afterAll(async () => {
    await prisma.$disconnect();
  })
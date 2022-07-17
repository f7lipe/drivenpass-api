import * as creditCardRepository from "../repositories/creditCardRepository.js";
import { creditCard } from "../schemas/creditCardSchema.js";
import { cryptr } from "../config/cryptConfig.js";

export async function create(creditCard: creditCard) {
    const encryptedCVV = cryptr.encrypt(creditCard.cvv);
    const encryptedPassword = cryptr.encrypt(creditCard.password);
    const newCreditCard = {
        cvv: encryptedCVV,
        password: encryptedPassword,
        ...creditCard
    }
    await creditCardRepository.createOne(newCreditCard);
}
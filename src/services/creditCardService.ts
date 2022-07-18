import * as creditCardRepository from "../repositories/creditCardRepository.js";
import { creditCard } from "../schemas/creditCardSchema.js";
import { cryptr } from "../config/cryptConfig.js";

export async function create(creditCard: creditCard) {
    const encryptedCVV = cryptr.encrypt(creditCard.cvv);
    const encryptedPassword = cryptr.encrypt(creditCard.password);
    const newCreditCard = {
        ...creditCard,
        cvv: encryptedCVV,
        password: encryptedPassword
    }
    return await creditCardRepository.createOne(newCreditCard);
}

export async function get(id: number, userId: number) {
    const creditCards = await creditCardRepository.getMany(id, userId)
    const userCreditCards = creditCards.filter(creditCard => creditCard.userId === userId)
    if(userCreditCards.length === 0 ) throw {
        status: 404,
        message: "No credit cards found"
    }
    const userCreditCardsWithDecryptedCVVAndPassword = userCreditCards.map<creditCard>(creditCard => {

        return {...creditCard,
            password: cryptr.decrypt(creditCard.password),
            cvv: cryptr.decrypt(creditCard.cvv),
            
        }})
        
    return userCreditCardsWithDecryptedCVVAndPassword
}

export async function deleteOne(id: number, userId: number) {
    const userCreditCards = await creditCardRepository.getMany(id, userId)
    if(userCreditCards.length === 0 ) throw {
        status: 404,
        message: "No credit cards found"
    }
    await creditCardRepository.deleteOne(id)
}
import "./envConfig.js"
import Cryptr from "cryptr";

export const cryptr = new Cryptr(process.env.CRYPT_KEY);
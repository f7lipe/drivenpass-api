import { wifi } from "../schemas/wifiSchema";
import * as wifiRepository from "../repositories/wifiRepository.js";
import { cryptr } from "../config/cryptConfig.js";


export async function create(wifi: wifi) {
    const encryptedPassword = cryptr.encrypt(wifi.password)
    const newWifi = { ...wifi, password: encryptedPassword };
    await wifiRepository.createOne(newWifi);
}
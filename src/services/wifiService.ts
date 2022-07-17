import { wifi } from "../schemas/wifiSchema";
import * as wifiRepository from "../repositories/wifiRepository.js";
import { cryptr } from "../config/cryptConfig.js";


export async function create(wifi: wifi) {
    const encryptedPassword = cryptr.encrypt(wifi.password)
    const newWifi = { ...wifi, password: encryptedPassword };
    await wifiRepository.createOne(newWifi);
}

export async function get(wifiId: number, userId: number) {
    const wifi = await wifiRepository.getMany(wifiId, userId);
    const userWifis = wifi.filter(w => w.userId === userId);
    if(userWifis.length === 0) throw {
        status: 404,
        message: "Wifi not found"
    }
    const decryptedWifi =  userWifis.map(w => {
        const decryptedPassword = cryptr.decrypt(w.password);
        return { ...w, password: decryptedPassword }
    })
    return decryptedWifi;
}


export async function deleteOne(wifiId: number, userId: number) {
    const wifi = await wifiRepository.getMany(wifiId, userId);
    if(wifi.length === 0) throw {
        status: 404,
        message: "Wifi not found"
    }
    await wifiRepository.deleteOne(wifiId);
}
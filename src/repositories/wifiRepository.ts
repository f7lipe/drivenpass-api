import { prisma } from "../config/database.js";

import { wifi } from "../schemas/wifiSchema.js";


export async function createOne(wifi: wifi) {
    await prisma.wifi.create({
        data: {
            ...wifi
        }
    });
}

export async function getMany(wifiId: number, userId: number) {
    let queryBuilder: Object 
    if(wifiId) queryBuilder = { where: { id: wifiId } }
    else queryBuilder = { where: { userId } }
    return await prisma.wifi.findMany(queryBuilder);
}

export async function deleteOne(wifiId: number) {
    await prisma.wifi.delete({
        where: {
            id: wifiId
        }
    });
}
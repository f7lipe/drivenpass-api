import { prisma } from "../config/database.js";

import { wifi } from "../schemas/wifiSchema.js";

export async function createOne(wifi: wifi) {
    await prisma.wifi.create({
        data: {
            ...wifi
        }
    });
}
-- CreateTable
CREATE TABLE "wifis" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ssid" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wifis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wifis_userId_ssid_key" ON "wifis"("userId", "ssid");

-- AddForeignKey
ALTER TABLE "wifis" ADD CONSTRAINT "wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

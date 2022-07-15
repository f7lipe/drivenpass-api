/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "credentials_userId_title_idx";

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_title_key" ON "credentials"("userId", "title");

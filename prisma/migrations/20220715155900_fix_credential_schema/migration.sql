-- DropIndex
DROP INDEX "credentials_title_key";

-- CreateIndex
CREATE INDEX "credentials_userId_title_idx" ON "credentials"("userId", "title");

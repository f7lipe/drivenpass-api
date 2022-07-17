/*
  Warnings:

  - Added the required column `title` to the `creditcards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "creditcards" ADD COLUMN     "title" TEXT NOT NULL;

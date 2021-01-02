/*
  Warnings:

  - You are about to alter the column `value` on the `Param` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE "Param" ALTER COLUMN "value" SET DATA TYPE DECIMAL(65,30);

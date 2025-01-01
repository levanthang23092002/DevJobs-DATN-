/*
  Warnings:

  - You are about to drop the column `diaChi` on the `kinhnghiem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `kinhnghiem` DROP COLUMN `diaChi`,
    ADD COLUMN `viTri` VARCHAR(191) NULL;

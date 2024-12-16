/*
  Warnings:

  - You are about to drop the column `ten` on the `loaitaikhoan` table. All the data in the column will be lost.
  - Added the required column `quyen` to the `LOAITAIKHOAN` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `loaitaikhoan` DROP COLUMN `ten`,
    ADD COLUMN `quyen` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - Made the column `trangThai` on table `thongbao` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `thongbao` MODIFY `trangThai` INTEGER NOT NULL DEFAULT 0;

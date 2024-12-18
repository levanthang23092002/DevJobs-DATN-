/*
  Warnings:

  - You are about to alter the column `xacThuc` on the `congty` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `xacThuc` on the `nguoidung` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `congty` MODIFY `xacThuc` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `nguoidung` MODIFY `xacThuc` BOOLEAN NOT NULL DEFAULT false;

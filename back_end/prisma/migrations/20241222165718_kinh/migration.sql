/*
  Warnings:

  - You are about to drop the column `thoiGianBatDau` on the `duan` table. All the data in the column will be lost.
  - You are about to drop the column `thoiGianKetThuc` on the `duan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `duan` DROP COLUMN `thoiGianBatDau`,
    DROP COLUMN `thoiGianKetThuc`,
    ADD COLUMN `moTa` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `hocvan` ADD COLUMN `thoiGianBatDau` DATETIME(3) NULL,
    ADD COLUMN `thoiGianKetThuc` DATETIME(3) NULL;

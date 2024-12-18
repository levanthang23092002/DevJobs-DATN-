/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `CONGTY` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `NGUOIDUNG` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idLoaiTK` INTEGER NULL,
    `email` VARCHAR(191) NOT NULL,
    `matKhau` VARCHAR(191) NOT NULL,
    `ten` VARCHAR(191) NOT NULL,
    `sDT` VARCHAR(191) NULL,
    `ngaySinh` DATETIME(3) NULL,
    `anhDaiDien` VARCHAR(191) NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `CONGTY_email_key` ON `CONGTY`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `NGUOIDUNG_email_key` ON `NGUOIDUNG`(`email`);

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_idLoaiTK_fkey` FOREIGN KEY (`idLoaiTK`) REFERENCES `LOAITAIKHOAN`(`idLoaiTK`) ON DELETE SET NULL ON UPDATE CASCADE;

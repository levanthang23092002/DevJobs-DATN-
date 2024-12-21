/*
  Warnings:

  - Made the column `trangThai` on table `congty` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `baidang` MODIFY `trangThai` VARCHAR(191) NOT NULL DEFAULT 'Chờ Duyệt';

-- AlterTable
ALTER TABLE `congty` MODIFY `trangThai` VARCHAR(191) NOT NULL DEFAULT 'Chờ Duyệt';

-- AlterTable
ALTER TABLE `danhsach_uv` MODIFY `trangThai` VARCHAR(191) NOT NULL DEFAULT 'Chờ Duyệt';

-- AlterTable
ALTER TABLE `nguoidung` MODIFY `trangThai` VARCHAR(191) NOT NULL DEFAULT 'Chờ Duyệt';

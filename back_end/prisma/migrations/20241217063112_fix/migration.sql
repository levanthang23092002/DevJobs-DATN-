/*
  Warnings:

  - Made the column `trangThai` on table `baidang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trangThai` on table `danhsach_uv` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trangThai` on table `nguoidung` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `baidang` MODIFY `trangThai` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `congty` ADD COLUMN `xacThuc` INTEGER NOT NULL DEFAULT 0,
    MODIFY `trangThai` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `danhsach_uv` MODIFY `trangThai` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `nguoidung` ADD COLUMN `xacThuc` INTEGER NOT NULL DEFAULT 0,
    MODIFY `trangThai` INTEGER NOT NULL DEFAULT 0;

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthAdminRepository {
  constructor(private prisma: PrismaService) {}

  async countUser() {
    return await this.prisma.nGUOIDUNG.count();
  }
  async countCompany() {
    return await this.prisma.cONGTY.count();
  }
  async countPost() {
    return await this.prisma.bAIDANG.count();
  }

  async getAllCompany() {}

  async updatePosition(id, data) {
    const position = await this.prisma.vITRIUNGTUYEN.update({
      where: { idViTri: id },
      data: {
        tenViTri: data.tenViTri,
        trangThai: data.trangThai,
      },
    });
    return position;
  }
  async updateProvince(id, data) {
    const Proveder = await this.prisma.tINHTHANH.update({
      where: { idTinhThanh: id },
      data: {
        tenTinhThanh: data.tenTinhThanh,
        trangThai: data.trangThai,
      },
    });
    return Proveder;
  }
  async updateLevel(id, data) {
    const level = await this.prisma.capDo.update({
      where: { idCapDo: id },
      data: {
        tenCapDo: data.tenCapDo,
        trangThai: data.trangThai,
      },
    });
    return level;
  }

  async addPosition(data) {
    const addpost = await this.prisma.vITRIUNGTUYEN.create({
      data: {
        tenViTri: data.ten,
      },
    });
    return addpost;
  }

  async addProvince(data) {
    const addProvince = await this.prisma.tINHTHANH.create({
      data: {
        tenTinhThanh: data.ten,
      },
    });
    return addProvince;
  }

  async addLevel(data) {
    const addLevel = await this.prisma.capDo.create({
      data: {
        tenCapDo: data.ten,
      },
    });
    return addLevel;
  }
}

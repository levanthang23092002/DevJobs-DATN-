import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async registerCompany(data) {
    const company = await this.prisma.cONGTY.create({
      data: data,
    });
    return company;
  }

  async existingCompany(email) {
    const check = await this.prisma.cONGTY.findMany({
      where: {
        email,
      },
    });

    return check.length === 0;
  }

  async updateCompany(id: number, data: any) {
    return this.prisma.cONGTY.update({
      where: { idCongTy: id },
      data,
    });
  }
  async checkCompany(email: string) {
    return this.prisma.cONGTY.findFirst({
      where: { email },
      include: {
        loaiTaiKhoan: true,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  async getAllCity() {
    const allCity = await this.prisma.tINHTHANH.findMany();
    return allCity;
  }

  async getAllPosition() {
    const allPoosition = await this.prisma.vITRIUNGTUYEN.findMany();
    return allPoosition;
  }

  async getAllLevel() {
    const allPoosition = await this.prisma.capDo.findMany();
    return allPoosition;
  }
}

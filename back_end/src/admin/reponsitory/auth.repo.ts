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
}

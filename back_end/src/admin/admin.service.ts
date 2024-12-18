import { Injectable } from '@nestjs/common';
import { AuthAdminRepository } from './reponsitory/auth.repo';

@Injectable()
export class AdminService {
  constructor(private readonly repoAuth: AuthAdminRepository) {}
  async getCountUser() {
    const totall = await this.repoAuth.countUser();
    return {
      totall,
    };
  }
  async getCountCompany() {
    const totall = await this.repoAuth.countCompany();
    return {
      totall,
    };
  }
  async getCountPost() {
    const totall = await this.repoAuth.countPost();
    return {
      totall,
    };
  }
}

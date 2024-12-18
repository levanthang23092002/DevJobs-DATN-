import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @Get('/total-user')
  async getTotalUser() {
    return await this.service.getCountUser();
  }
  @Get('/total-company')
  async getTotalCompany() {
    return await this.service.getCountCompany();
  }
  @Get('/total-post')
  async getTotalPost() {
    return await this.service.getCountPost();
  }
}

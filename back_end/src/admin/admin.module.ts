import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { AuthAdminRepository } from './reponsitory/auth.repo';

@Module({
  controllers: [AdminController],
  providers: [AdminService, AuthAdminRepository],
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware.create(['Admin'])) // Inject roles here
      .forRoutes('/admins/*'); // Route cần bảo vệ
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [PrismaModule, AuthsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

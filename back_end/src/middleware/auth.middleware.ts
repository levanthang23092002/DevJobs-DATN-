import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly allowedRoles: string[]) {} // Allowed roles injected

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Bạn Cần Đăng nhập Vào Hệ thống ');
    }

    try {
      // Decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach decoded user information to request
      req['user'] = decoded;

      // Check if user's role is allowed
      const userRole = decoded['role'];
      if (!this.allowedRoles.includes(userRole)) {
        throw new ForbiddenException(
          'You do not have permission to access this resource',
        );
      }

      // If role is valid, proceed
      next();
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const payload = await this.jwtService.verify(
        request.headers.authorization.split(' ')[1],
        {
          secret: this.configService.get('jwt.secret'),
        },
      );
      if (!payload?.client || !payload?.userId)
        throw new UnauthorizedException('Invalid token');

      const url = this.authService.getBaseUrl(payload?.client);
      const user = await this.authService.getUser(
        payload?.userId,
        url,
        request.headers.authorization,
      );

      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException(
        'authorization header missing or invalid',
      );
    }
  }
}

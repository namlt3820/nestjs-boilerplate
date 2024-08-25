import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserRepository } from '@lib/config/app-sequelize';
import { ExceptionService } from '@lib/use-case/exception';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userRepository: UserRepository,
    private readonly exceptionService: ExceptionService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.public_key'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    const user = await this.userRepository.getByEmail(payload.email);

    if (!user) {
      this.exceptionService.throwAppException('USER.WRONG_CREDENTIALS');
    }

    return user;
  }
}

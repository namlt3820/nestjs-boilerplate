import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

const jwtModuleAsyncOptions: JwtModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      privateKey: configService.get<string>('jwt.private_key'),
      publicKey: configService.get<string>('jwt.public_key'),
      signOptions: { expiresIn: '3h', algorithm: 'RS256' },
    };
  },
};
@Module({
  imports: [
    SequelizeModule.forFeature([UserModel]),
    JwtModule.registerAsync(jwtModuleAsyncOptions),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserRepository],
  exports: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

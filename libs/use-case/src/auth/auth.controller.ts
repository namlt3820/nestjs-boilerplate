import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { AuthService } from './auth.service';
import { GetProfileResponse, LoginResponse } from './dto';
import { JwtAuthGuard, LocalAuthGuard } from './guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const accessToken = await this.authService.login(req.user);

    return createResponse(LoginResponse, accessToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return createResponse(GetProfileResponse, req.user);
  }
}

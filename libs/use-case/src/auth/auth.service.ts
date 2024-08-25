import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserRepository } from '@lib/config/app-sequelize';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      return null;
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) return null;

    return user;
  }

  async login(user) {
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      sub: user.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}

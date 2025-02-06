import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: { username: string, password: string }) {
    const payload = await this.authService.validateUser(user.username, user.password);
    if (!payload) {
      throw new Error('Invalid credentials');
    }

    const accessToken = await this.authService.generateJwt(payload);
    return { accessToken };
  }

  @Post('protected')
  @UseGuards(JwtAuthGuard)
  getProtectedRoute() {
    return { message: 'This is a protected route' };
  }
}
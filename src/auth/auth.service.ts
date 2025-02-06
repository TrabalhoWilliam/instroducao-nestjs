import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwt(payload: any) {
    return this.jwtService.sign(payload); // Gera o token JWT
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // Aqui você deve buscar o usuário na sua base de dados e verificar a senha.
    // Vamos simular com um usuário fictício:
    const user = { username: 'test', password: 'password123' };

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

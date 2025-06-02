/*
  - Controller responsável por lidar com as requisições de autenticação.
  - Define o endpoint de login, que recebe email e senha e retorna um token JWT.
*/

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') /* --> Define a rota base: /auth */
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') /* --> Rota final para POST será: /auth/login */
  async login(@Body() body: { email: string; password: string }) {
    
    /* Valida as credenciais do admin */
    const admin = await this.authService.validateAdmin(body.email, body.password);
    
    /* Gera e retorna o token JWT */
    return this.authService.login(admin);
  }
}

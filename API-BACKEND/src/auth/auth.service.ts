/*
  - Serviço de autenticação da aplicação.
  - Responsável por validar as credenciais e gerar o token JWT para o Admin.
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService, 
    private readonly jwtService: JwtService,     /* Serviço que gera tokens JWT */
  ) {}

  // MÉTODO: Para validar o Admin com base em email e senha
  async validateAdmin(email: string, password: string) {
    const admin = await this.adminService.findByEmail(email); /* --> Busca o Admin pelo email, implementado em base.service */

    if (!admin) {
      throw new UnauthorizedException('Email ou senha inválidos'); /* --> Se não encontrar o Admin, lança exceção de não autorizado */
    }

    const isPasswordValid = await bcrypt.compare(password, admin.senhaAdmin); /* --> Compara senha com hash */

    if (!isPasswordValid) {
      throw new UnauthorizedException('Email ou senha inválidos'); /* --> Se a senha estiver incorreta, lança exceção de não autorizado */
    }

    return admin; /* Retorna o Admin autenticado */
  }

  // MÉTODO: Que gera o token JWT
  async login(admin: any) {
    const payload = { email: admin.emailAdmin, sub: admin.id_admin }; /* --> Define o payload do token */

    return { 
      access_token: this.jwtService.sign(payload), /* --> Retorna o token JWT gerado */
    };
  }
}

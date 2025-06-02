/*
  - Módulo de autenticação da aplicação.
  - Importa o módulo JWT e o módulo Admin, e registra os providers e controllers necessários.
*/

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from '../modules/admin.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    /* Configuração do JWT com chave secreta e tempo de expiração */
    JwtModule.register({
      secret: 'seu_jwt_secreto', /* Quando for precisar: Substituir por variável de ambiente em produção */
      signOptions: { expiresIn: '1h' }, /* Token expira em 1 hora */
    }),
    AdminModule,
  ],
  controllers: [
    AuthController
  ], 
  providers: [
    AuthService, 
    JwtStrategy],     
})
export class AuthModule {}

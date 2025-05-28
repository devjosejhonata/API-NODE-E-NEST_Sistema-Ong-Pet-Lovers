/*
  - Arquivo principal de configuração do módulo da aplicação NestJS.
  - Responsável por importar e centralizar todos os módulos usados na aplicação.
  - Aqui é feita a configuração da conexão com o banco de dados via TypeORM e o registro dos módulos das entidades.
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/database.config';

import { EnderecoModule } from './modules/endereco.module';
import { AbrigoModule } from './modules/abrigo.module';
import { AdminModule } from './modules/admin.module'; 
import { AdotanteModule } from './modules/adotante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), // Faz a conexão com o banco de dados
    EnderecoModule, // Importa o módulo da entidade Endereco
    AbrigoModule,   // Importa o módulo da entidade Abrigo
    AdminModule,    // Importa o módulo da entidade Admin
    AdotanteModule, // Importa o módulo da entidade Adotante
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

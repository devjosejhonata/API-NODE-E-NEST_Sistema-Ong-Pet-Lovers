/*
 - Módulo responsável por encapsular e registrar o EnderecoController, EnderecoService e EnderecoRepository.
 - Permite organização e modularização do código da entidade Endereco.
*/


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecoController } from '../controllers/endereco.controller';
import { EnderecoService } from '../services/endereco.service';
import { EnderecoRepository } from '../repository/endereco.repository';
import { Endereco } from '../models/endereco.model'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Endereco, EnderecoRepository]), // Registra a entidade e o repositório
  ],
  controllers: [
    EnderecoController, // Registra o controller da entidade Endereco
  ],
  providers: [
    EnderecoService, // Registra o service da entidade Endereco
    EnderecoRepository, // Registra o EnderecoRepository como provider
  ],
})

export class EnderecoModule {}
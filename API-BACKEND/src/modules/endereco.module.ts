/*
 - Módulo responsável por encapsular e registrar o EnderecoController e o EnderecoService.
 - Permite organização e modularização do código da entidade Endereco.
*/

import { Module } from '@nestjs/common';
import { EnderecoController } from '../controllers/endereco.controller';
import { EnderecoService } from '../services/endereco.service';

@Module({
  controllers: [
    EnderecoController, // Registra o controller da entidade Endereco
  ],
  providers: [
    EnderecoService, // Registra o service da entidade Endereco
  ],
})
export class EnderecoModule {}

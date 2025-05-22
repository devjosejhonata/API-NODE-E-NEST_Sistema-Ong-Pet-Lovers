/*
 - Módulo responsável por encapsular e registrar o AbrigoController, AbrigoService e AbrigoRepository.
 - Permite organização e modularização do código da entidade Abrigo.
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbrigoController } from '../controllers/abrigo.controller';
import { AbrigoService } from '../services/abrigo.service';
import { AbrigoRepository } from '../repository/abrigo.repository';
import { Abrigo } from '../models/abrigo.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Abrigo, AbrigoRepository]), // Registra a entidade e o repositório
  ],
  controllers: [
    AbrigoController, // Registra o controller da entidade Abrigo
  ],
  providers: [
    AbrigoService, // Registra o service da entidade Abrigo
    AbrigoRepository, // Registra o AbrigoRepository como provider
  ],
})
export class AbrigoModule {}

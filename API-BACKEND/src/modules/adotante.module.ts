/*
 - Módulo responsável por encapsular e registrar o AdotanteController, AdotanteService e AdotanteRepository.
 - Permite organização e modularização do código da entidade Adotante.
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdotanteController } from '../controllers/adotante.controller';
import { AdotanteService } from '../services/adotante.service';
import { AdotanteRepository } from '../repository/adotante.repository';
import { Adotante } from '../models/adotante.model';
import { PetModule } from './pet.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Adotante, AdotanteRepository]), // Registra a entidade e o repositório
    PetModule,
  ],
  controllers: [
    AdotanteController, // Registra o controller da entidade Adotante
  ],
  providers: [
    AdotanteService, // Registra o service da entidade Adotante
    AdotanteRepository, // Registra o AdotanteRepository como provider
  ],
  
})
export class AdotanteModule {}

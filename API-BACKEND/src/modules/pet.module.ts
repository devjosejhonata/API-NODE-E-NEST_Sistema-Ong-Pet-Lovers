/*
 - Módulo responsável por encapsular e registrar o PetController, PetService e PetRepository.
 - Permite organização e modularização do código da entidade Pet.
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from '../controllers/pet.controller';
import { PetService } from '../services/pet.service';
import { PetRepository } from '../repository/pet.repository';
import { Pet } from '../models/pet.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet, PetRepository]), // Registra a entidade e o repositório
  ],
  controllers: [
    PetController, // Registra o controller da entidade Pet
  ],
  providers: [
    PetService, // Registra o service da entidade Pet
    PetRepository, // Registra o PetRepository como provider
  ],
})
export class PetModule {}

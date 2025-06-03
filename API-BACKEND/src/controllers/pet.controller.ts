/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Pet.
 - Herda os métodos genéricos de BaseController e injeta o PetService para as operações.
 - Arquivo com decorator incluso para documentação Swagger na api.
*/

import { Controller } from '@nestjs/common';
import { PetService } from '../services/pet.service';
import { BaseController } from './base.controller';
import { Pet } from '../models/pet.model';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')    // Aparece como seção “Pets” no Swagger
@Controller('pets') // Define a rota base como /pets

// Estende o controlador base genérico
export class PetController extends BaseController<Pet> {

  constructor(petService: PetService) {
    super(petService); // Injeta o PetService no BaseController
  }

}

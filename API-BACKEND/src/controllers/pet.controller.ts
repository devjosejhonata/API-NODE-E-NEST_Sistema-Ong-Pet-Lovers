/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Pet.
 - Herda os métodos genéricos de BaseController e injeta o PetService para as operações.
*/

import { Controller } from '@nestjs/common';
import { PetService } from '../services/pet.service';
import { BaseController } from './base.controller';
import { Pet } from '../models/pet.model';

@Controller('pets') // Define a rota base como /pets

// Estende o controlador base genérico
export class PetController extends BaseController<Pet> {

  constructor(petService: PetService) {
    super(petService); // Injeta o PetService no BaseController
  }

}

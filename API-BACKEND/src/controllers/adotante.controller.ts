/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Adotante.
 - Herda os métodos genéricos de BaseController e injeta o AdotanteService para as operações.
*/

import { Controller, } from '@nestjs/common';
import { AdotanteService } from '../services/adotante.service';
import { BaseController } from './base.controller';
import { Adotante } from '../models/adotante.model';

@Controller('adotantes') // Define a rota base como /adotantes

// Estende o controlador base genérico
export class AdotanteController extends BaseController<Adotante> {

  constructor(adotanteService: AdotanteService) {
    super(adotanteService); // Injeta o AdotanteService no BaseController
  }
  
}

/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Abrigo.
 - Herda os métodos genéricos de BaseController e injeta o AbrigoService para as operações.
*/

import { Controller, } from '@nestjs/common';
import { AbrigoService } from '../services/abrigo.service';
import { BaseController } from './base.controller';
import { Abrigo } from '../models/abrigo.model';

@Controller('abrigos') // Define a rota base como /abrigos

// Estende o controlador base genérico
export class AbrigoController extends BaseController<Abrigo> {
  
  constructor(abrigoService: AbrigoService) {
    super(abrigoService); // Injeta o AbrigoService no BaseController
  }

}

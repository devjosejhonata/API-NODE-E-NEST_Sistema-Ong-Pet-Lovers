/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Endereco.
 - Herda os métodos genéricos de BaseController e injeta o EnderecoService para as operações.
*/

import { Controller } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';
import { BaseController } from './base.controller';
import { Endereco } from '../models/endereco.model';

@Controller('enderecos') // Define a rota base como /enderecos
export class EnderecoController extends BaseController<Endereco> {
  constructor(enderecoService: EnderecoService) {
    super(enderecoService); // Injeta o EnderecoService no BaseController
  }
}

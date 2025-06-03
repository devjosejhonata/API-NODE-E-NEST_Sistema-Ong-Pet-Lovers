/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Adotante.
 - Herda os métodos genéricos de BaseController e injeta o AdotanteService para as operações.
 - Arquivo com decorator incluso para documentação Swagger na api.
*/

import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AdotanteService } from '../services/adotante.service';
import { BaseController } from './base.controller';
import { Adotante } from '../models/adotante.model';

import { JwtAuthGuard } from '../auth/jwt.auth.guard';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Adotantes')    // Aparece como seção “Adotantes” no Swagger
@ApiBearerAuth()         // Todas as rotas aqui exigem JWT
@Controller('adotantes') // Define a rota base como /adotantes

// Estende o controlador base genérico
export class AdotanteController extends BaseController<Adotante> {

  constructor(adotanteService: AdotanteService) {
    super(adotanteService); // Injeta o AdotanteService no BaseController
  }

  // Sobrescreve o GET de base.service, todos os adotantes.
  /* Para tornar a rota GET protegida para dados de Adotante*/
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query: any): Promise<any> {
    return this.service.findAll(query);
  }

  // Sobrescreve o GET por ID de adotantes em base.service.
  /* Para tornar a rota GET por ID de adotantes protegida para dados de Adotante*/
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.service.findOne(id);
  }

}

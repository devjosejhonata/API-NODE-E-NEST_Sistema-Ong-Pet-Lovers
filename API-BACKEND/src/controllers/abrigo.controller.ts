/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Abrigo.
 - Herda os métodos genéricos de BaseController e injeta o AbrigoService para as operações.
 - Inclui suporte à paginação e filtros opcionais para busca de registros.
*/

import { Controller, Get, Query } from '@nestjs/common';
import { AbrigoService } from '../services/abrigo.service';
import { BaseController } from './base.controller';
import { Abrigo } from '../models/abrigo.model';

@Controller('abrigos') // Define a rota base como /abrigos

// Estende o controlador base genérico
export class AbrigoController extends BaseController<Abrigo> {
  
  constructor(private readonly abrigoService: AbrigoService) {
    super(abrigoService); // Injeta o AbrigoService no BaseController
  }

  //Paginação. Utiliza a rota única /abrigos para listar abrigos com paginação e filtros opcionais
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('nomeAbrigo') nomeAbrigo?: string,
    @Query('emailAbrigo') emailAbrigo?: string,
    @Query('celularAbrigo') celularAbrigo?: string,
  ) {
    const filters: any = {};
    if (nomeAbrigo) filters.nomeAbrigo = nomeAbrigo;
    if (emailAbrigo) filters.emailAbrigo = emailAbrigo;
    if (celularAbrigo) filters.celularAbrigo = celularAbrigo;

    return this.abrigoService.paginate(Number(page), Number(limit), filters);
  }
}

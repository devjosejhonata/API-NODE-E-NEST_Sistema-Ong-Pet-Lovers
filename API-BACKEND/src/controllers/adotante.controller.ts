/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Adotante.
 - Herda os métodos genéricos de BaseController e injeta o AdotanteService para as operações.
 - Inclui suporte à paginação e filtros opcionais para busca de registros.
*/

import { Controller, Get, Query } from '@nestjs/common';
import { AdotanteService } from '../services/adotante.service';
import { BaseController } from './base.controller';
import { Adotante } from '../models/adotante.model';

@Controller('adotantes') // Define a rota base como /adotantes

// Estende o controlador base genérico
export class AdotanteController extends BaseController<Adotante> {

  constructor(private readonly adotanteService: AdotanteService) {
    super(adotanteService); // Injeta o AdotanteService no BaseController
  }

  // Paginação. Utiliza a rota única /adotantes para listar adotantes com paginação e filtros opcionais
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('nomeAdotante') nomeAdotante?: string,
    @Query('emailAdotante') emailAdotante?: string,
    @Query('celularAdotante') celularAdotante?: string,
    @Query('rgAdotante') rgAdotante?: string,
    @Query('dataCadastroAdotante') dataCadastroAdotante?: string, // Formato: yyyy-mm-dd
  ) {
    const filters: any = {};
    if (nomeAdotante) filters.nomeAdotante = nomeAdotante;
    if (emailAdotante) filters.emailAdotante = emailAdotante;
    if (celularAdotante) filters.celularAdotante = celularAdotante;
    if (rgAdotante) filters.rgAdotante = rgAdotante;
    if (dataCadastroAdotante) filters.dataCadastroAdotante = new Date(dataCadastroAdotante);

    return this.adotanteService.paginate(Number(page), Number(limit), filters);
  }
}

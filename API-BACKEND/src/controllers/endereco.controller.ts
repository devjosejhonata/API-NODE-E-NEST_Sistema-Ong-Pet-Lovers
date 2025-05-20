/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Endereco.
 - Herda os métodos genéricos de BaseController e injeta o EnderecoService para as operações.
*/

import { Controller, Get, Query } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';
import { BaseController } from './base.controller';
import { Endereco } from '../models/endereco.model';

@Controller('enderecos') // Define a rota base como /enderecos

export class EnderecoController extends BaseController<Endereco> {
  
  constructor(private readonly enderecoService: EnderecoService) {
    super(enderecoService); // Injeta o EnderecoService no BaseController
  }

  // Utiliza a Rota única, /enderecos, para listar endereços com paginação e filtros opcionais
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('estado') estado?: string,
    @Query('cidade') cidade?: string,
    @Query('bairro') bairro?: string,
  ) {
    const filters: any = {};
    if (estado) filters.estado = estado; 
    if (cidade) filters.cidade = cidade;
    if (bairro) filters.bairro = bairro;

    return this.enderecoService.paginate(Number(page), Number(limit), filters);
  }
}

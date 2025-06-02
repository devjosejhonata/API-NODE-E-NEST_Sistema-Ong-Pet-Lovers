/*
 - Controlador genérico abstrato que define operações comuns para reutilização por outros controllers.
 - Espera que o serviço seja injetado pelos controllers filhos e que este implemente os métodos padrão.
 - Inclui suporte à paginação e filtros opcionais para busca de registros.
 - Utilizando Autenticação JWT nas rotas protegidas.
 - As rotas POST, PUT e DELETE estão protegidas, enquanto GETs permanecem públicos.
*/

import { Get, Post, Body, Param, Put, Delete, Query, UseGuards } from '@nestjs/common'; //importando os decorators do nest

import { BaseService } from '../services/base.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

export abstract class BaseController<Entity> { 
      
    constructor(protected readonly service: BaseService<Entity>) {}// Injeta o service correspondente à entidade que herda este controller

    // Método para retornar todos os registros com Paginação
    /* Rota pública */
    @Get()
    async findAll(@Query() query: any): Promise<any> {
      return this.service.findAll(query);
    }

    // Método para retornar um registro pelo ID
    /* Rota pública */
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return this.service.findOne(id);
    }

    // Método para criar um novo registro
    /* Rota protegida */
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() data: any): Promise<any> {
      return this.service.create(data);
    }

    // Método para atualizar um registro pelo ID
    /* Rota protegida */
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() data: any): Promise<any> {
      return this.service.update(id, data);
    }

    // Método para excluir um registro pelo ID
    /* Rota protegida */
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<any> {
      return this.service.remove(id);
    }
}

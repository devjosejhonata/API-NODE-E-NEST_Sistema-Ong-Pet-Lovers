/*
 - Controlador genérico abstrato que define operações comuns para reutilização por outros controllers.
 - Espera que o serviço seja injetado pelos controllers filhos e que este implemente os métodos padrão.
*/

import { Get, Post, Body, Param, Put, Delete} from '@nestjs/common'; //importando os decorators do nest
import { BaseService } from '../services/base.service';

export abstract class BaseController<Entity> { 
  
  constructor(protected readonly service: BaseService<Entity>) {}// Injeta o service correspondente à entidade que herda este controller

// Método para retornar todos os registros
@Get()
async findAll(): Promise<any> {
  return this.service.findAll();
}

// Método para retornar um registro pelo ID
@Get(':id')
async findOne(@Param('id') id: number): Promise<any> {
  return this.service.findOne(id);
}

// Método para criar um novo registro
@Post()
async create(@Body() data: any): Promise<any> {
  return this.service.create(data);
}

// Método para atualizar um registro pelo ID
@Put(':id')
async update(@Param('id') id: number, @Body() data: any): Promise<any> {
  return this.service.update(id, data);
}

// Método para excluir um registro pelo ID
@Delete(':id')
async remove(@Param('id') id: number): Promise<any> {
  return this.service.remove(id);
}
}

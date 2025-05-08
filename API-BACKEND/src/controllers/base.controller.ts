/*
 - Controlador genérico abstrato que define operações comuns para reutilização por outros controllers.
 - Espera que o serviço seja injetado pelos controllers filhos e que este implemente os métodos padrão.
*/

import { Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

export abstract class BaseController<T> {
  
  // Injeta o service correspondente à entidade que herda este controller
  constructor(protected readonly service: any) {}

  @Get() // Método para retornar todos os registros
  findAll(): any {
    return this.service.findAll();
  }

  @Get(':id') // Método para retornar um registro pelo ID
  findOne(@Param('id') id: number): any {
    return this.service.findOne(id);
  }

  @Post() // Método para criar um novo registro
  create(@Body() data: T): any {
    return this.service.create(data);
  }

  @Put(':id') // Método para atualizar um registro pelo ID
  update(@Param('id') id: number, @Body() data: T): any {
    return this.service.update(id, data);
  }

  @Delete(':id') // Método para excluir um registro pelo ID
  remove(@Param('id') id: number): any {
    return this.service.remove(id);
  }
}

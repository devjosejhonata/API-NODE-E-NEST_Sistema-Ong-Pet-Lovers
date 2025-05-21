/*
 - Controlador genérico abstrato que define operações comuns para reutilização por outros controllers.
 - Espera que o serviço seja injetado pelos controllers filhos e que este implemente os métodos padrão.
*/

import { Get, Post, Body, Param, Put, Delete, HttpStatus, HttpException} from '@nestjs/common'; //importando os decorators do nest
import { BaseService } from '../services/base.service';

export abstract class BaseController<Entity> { 
  
  constructor(protected readonly service: BaseService<Entity>) {}// Injeta o service correspondente à entidade que herda este controller

  // Método para retornar todos os registros
  @Get()
  async findAll(): Promise<any> {
    const data = await this.service.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Registros retornados com sucesso.',
      data,
    };
  }

  // Método para retornar um registro pelo ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    const data = await this.service.findOne(id);
    if (!data) {
      throw new HttpException(`Registro ${id} não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: `Registro ${id} retornado com sucesso.`,
      data,
    };
  }

// Método para criar um novo registro, utilizando DTO
@Post()
  async create(@Body() data: any): Promise<any> {
    try {
      const result = await this.service.create(data);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Registro criado com sucesso.',
        data: result,
      };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Método para atualizar um registro pelo ID, tilizando DTO
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any): Promise<any> {
    try {
      const result = await this.service.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Registro atualizado com sucesso.',
        data: result,
      };
    } catch (error: any) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Método para excluir um registro pelo ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<any> {
    const deleted = await this.service.remove(id);
    if (!deleted) {
      throw new HttpException(`Registro ${id} não encontrado para remoção.`, HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message: `Registro ${id} removido com sucesso.`,
    };
  }
}

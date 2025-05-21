/*
 - Serviço base que contém métodos genéricos reutilizáveis por outros serviços de entidades.
 - Nesse base.service, contém validações como statusCode, HttpStatus, BAD_REQUEST
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseService<T> {
  Delete: any;
  constructor(private readonly repository: any) {}

// Retorna todos os registros
async findAll(): Promise<any> {
  const data = await this.repository.findAll();
  return {
    statusCode: HttpStatus.OK,
    message: 'Registros retornados com sucesso.',
    data,
  };
}

// Retorna um registro específico por ID
async findOne(id: number): Promise<any> {
  const data = await this.repository.findById(id);
  if (!data) {
    throw new HttpException(`Registro ${id} não encontrado.`, HttpStatus.NOT_FOUND);
  }
  return {
    statusCode: HttpStatus.OK,
    message: `Registro ${id} retornado com sucesso.`,
    data,
  };
}

// Cria um novo registro
async create(data: T): Promise<any> {
  try {
    const created = await this.repository.create(data);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Registro criado com sucesso.',
      data: created,
    };
  } catch (error: any) {
    throw new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Bad Request Exception',
        errors: error.response?.message || error.message || 'Erro desconhecido',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

// Atualiza um registro existente
async update(id: number, data: T): Promise<any> {
  try {
    const updated = await this.repository.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Registro atualizado com sucesso.',
      data: updated,
    };
  } catch (error: any) {
    throw new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Bad Request Exception',
        errors: error.response?.message || error.message || 'Erro desconhecido',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

// Remove um registro
async remove(id: number): Promise<any> {
  const deleted = await this.repository.delete(id);
  if (!deleted) {
    throw new HttpException(`Registro ${id} não encontrado para remoção.`, HttpStatus.NOT_FOUND);
  }
  return {
    statusCode: HttpStatus.OK,
    message: `Registro ${id} removido com sucesso.`,
  };
}

// Funcionalidade de Paginação dos dados retornados da API, com filtros opcionais
async paginate(
  page: number = 1,
  limit: number = 10,
  filters?: Partial<T>
): Promise<any> {
  const result = await this.repository.paginate(page, limit, filters);
  return {
    statusCode: 200,
    ...result,
    message: 'Registros paginados retornados com sucesso.',
  };
}


}
